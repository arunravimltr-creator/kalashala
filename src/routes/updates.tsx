import { Link, createFileRoute } from "@tanstack/react-router";
import { Bell, Check, Download, ExternalLink, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { InstallAppCard } from "@/components/install-app";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { allMocks, allQuestions, CORE_QUESTIONS } from "@/data/catalog";
import { CYCLE_WATCH, OFFICIAL_DESKS, SEED_NOTICES } from "@/data/nta-seed";
import { LATEST_PACK, PACK_CHANGES, WEIGHTAGE, WEEK16 } from "@/data/pack-meta";
import {
  CONTENT_VERSION,
  CYCLE_NOTES,
  cycleFromDate,
  cycleLabel,
  nextCycleDate,
  notesFor,
} from "@/lib/cycle";
import { KIND_ORDER, type NoticeKind } from "@/lib/nta";
import { ui } from "@/lib/i18n";
import { useKalashala } from "@/lib/store";
import { syncNta } from "@/lib/use-nta-sync";

export const Route = createFileRoute("/updates")({ component: UpdatesPage });

type Phase = "idle" | "checking" | "found" | "applying" | "done";

const KIND_KEY = {
  register: "kindRegister",
  syllabus: "kindSyllabus",
  paper: "kindPaper",
  key: "kindKey",
  result: "kindResult",
  admit: "kindAdmit",
  cutoff: "kindCutoff",
  city: "kindCity",
  bulletin: "kindBulletin",
  notice: "kindNotice",
} as const satisfies Record<NoticeKind, keyof typeof ui>;


function UpdatesPage() {
  const { t, x, lang } = useT();
  const cycle = cycleFromDate();
  const ack = useKalashala((s) => s.ackCycle);
  const seen = useKalashala((s) => s.seenCycle);
  const installed = useKalashala((s) => s.installedPack);
  const installedAt = useKalashala((s) => s.packInstalledAt);
  const installPack = useKalashala((s) => s.installPack);
  const notices = useKalashala((s) => s.notices);
  const seenIds = useKalashala((s) => s.seenNoticeIds);
  const lastFetch = useKalashala((s) => s.lastNoticeFetch);
  const fetchOk = useKalashala((s) => s.noticeFetchOk);
  const markRead = useKalashala((s) => s.markNoticesRead);
  const notifyPush = useKalashala((s) => s.notifyPush);
  const setNotifyPush = useKalashala((s) => s.setNotifyPush);
  const next = nextCycleDate(cycle);
  const current = notesFor(cycle);
  const upcoming = CYCLE_NOTES.filter((n) => n.cycle !== cycle);
  const live = installed === LATEST_PACK.id;
  const [phase, setPhase] = useState<Phase>(live ? "done" : "idle");
  const [progress, setProgress] = useState(live ? 100 : 0);
  const [collecting, setCollecting] = useState(false);
  const [fresh, setFresh] = useState(0);
  const [filter, setFilter] = useState<NoticeKind | "all">("all");

  const desk = notices.length ? notices : SEED_NOTICES;
  const unread = useMemo(() => {
    const seenSet = new Set(seenIds);
    return desk.filter((n) => !seenSet.has(n.id)).length;
  }, [desk, seenIds]);

  useEffect(() => {
    if (live) {
      setPhase("done");
      setProgress(100);
    }
  }, [live]);

  useEffect(() => {
    void syncNta({ force: false }).then(() => markRead());
  }, [markRead]);

  const bank = allQuestions().length;
  const packSets = allMocks().filter((m) => m.kind === "packset");
  const locale = lang === "ml" ? "ml-IN" : "en-IN";

  async function collect() {
    setCollecting(true);
    setFresh(0);
    const result = await syncNta({ force: true });
    setFresh(result.fresh);
    markRead();
    setCollecting(false);
  }

  async function enableAlerts() {
    if (typeof Notification === "undefined") return;
    const perm = await Notification.requestPermission();
    setNotifyPush(perm === "granted");
  }

  function runInstall() {
    if (phase === "checking" || phase === "applying") return;
    setPhase("checking");
    setProgress(12);
    window.setTimeout(() => {
      setPhase("found");
      setProgress(38);
    }, 420);
    window.setTimeout(() => {
      setPhase("applying");
      setProgress(72);
    }, 900);
    window.setTimeout(() => {
      setProgress(100);
      installPack(LATEST_PACK.id);
      ack(cycle);
      setPhase("done");
    }, 1500);
  }

  const phaseLabel =
    live || phase === "done"
      ? t("packInstalled")
      : phase === "checking"
        ? t("packChecking")
        : phase === "found"
          ? t("packFound")
          : phase === "applying"
            ? t("packApplying")
            : t("packReady");
  const bar = live || phase === "done" ? 100 : progress;

  const filtered = filter === "all" ? desk : desk.filter((n) => n.kind === filter);
  const presentKinds = KIND_ORDER.filter((k) => desk.some((n) => n.kind === k));

  return (
    <div className="space-y-8">
      <PageHero kicker={t("cyclePack")} title={t("navUpdates")} lead={t("updatesLead")} />

      <InstallAppCard />

      <Card className="border-prussian/30 bg-prussian/5">
        <CardContent className="space-y-3 pt-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="prussian">{t("officialDesk")}</Badge>
            {unread ? (
              <Badge tone="amber">
                {unread} {t("unreadN")}
              </Badge>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">{t("officialDeskLead")}</p>
          <p className="text-sm leading-relaxed text-ink-soft">{t("weeklyAuto")}</p>
          <p className="text-sm leading-relaxed text-ink-soft">{t("githubBuilt")}</p>
          <p className="text-xs text-muted">
            {lastFetch
              ? `${t("lastChecked")} ${new Date(lastFetch).toLocaleString(locale)}`
              : t("neverCollected")}
            {fresh > 0 ? ` · ${fresh} ${t("freshFound")}` : ""}
          </p>
          {!fetchOk ? <p className="text-sm text-brick">{t("feedOffline")}</p> : null}
          <div className="flex flex-wrap gap-2">
            <Button className="w-full sm:w-auto" onClick={() => void collect()} disabled={collecting}>
              {collecting ? <RefreshCw className="size-4 animate-spin" /> : <Bell className="size-4" />}
              {collecting ? t("collecting") : t("collectUpdates")}
            </Button>
            <Button variant="outline" size="sm" onClick={() => void enableAlerts()}>
              {notifyPush ? t("alertsOn") : t("enableAlerts")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("watchTitle")}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {CYCLE_WATCH.map((w) => {
            const hit = desk.find((n) => w.match.test(n.title));
            return (
              <Card key={w.id}>
                <CardContent className="space-y-2 pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge>{t(KIND_KEY[w.kind])}</Badge>
                    <Badge tone={hit ? "sage" : "muted"}>{hit ? t("liveOnNta") : t("waitingNta")}</Badge>
                  </div>
                  <p className="font-display text-lg">{x(w.title)}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{hit ? hit.title : x(w.waiting)}</p>
                  <a
                    href={hit?.url ?? "https://ugcnet.nta.nic.in/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-1.5 text-sm font-medium text-prussian"
                  >
                    {t("openOfficial")}
                    <ExternalLink className="size-3.5" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("officialDesk")}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {OFFICIAL_DESKS.map((d) => (
            <a
              key={d.id}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-line bg-surface shadow-soft transition-colors hover:border-prussian/40"
            >
              <CardContent className="space-y-2 pt-5">
                <Badge>{t(KIND_KEY[d.kind])}</Badge>
                <p className="font-display text-lg leading-snug">{x(d.title)}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{x(d.blurb)}</p>
                <p className="inline-flex items-center gap-1 text-sm font-medium text-prussian">
                  {t("openOfficial")}
                  <ExternalLink className="size-3.5" />
                </p>
              </CardContent>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")} label={t("filterAll")} />
          {presentKinds.map((k) => (
            <FilterChip key={k} active={filter === k} onClick={() => setFilter(k)} label={t(KIND_KEY[k])} />
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="text-sm text-ink-soft">{t("noNotices")}</p>
        ) : (
          <div className="space-y-2">
            {filtered.map((n) => (
              <a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-line bg-surface px-4 py-3 shadow-soft hover:border-prussian/40"
              >
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge>{t(KIND_KEY[n.kind])}</Badge>
                  {n.published ? <span className="text-xs tabular-nums text-muted">{n.published}</span> : null}
                </div>
                <p className="mt-1.5 text-sm font-medium leading-snug">{n.title}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-prussian">
                  {t("openOfficial")}
                  <ExternalLink className="size-3" />
                </p>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <Card className="border-prussian/30 bg-prussian/5">
          <CardContent className="space-y-3 pt-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="prussian">{t("contentChannel")}</Badge>
              <Badge>{LATEST_PACK.id}</Badge>
            </div>
            <h2 className="font-display text-xl">{x(LATEST_PACK.title)}</h2>
            <p className="text-sm leading-relaxed text-ink-soft">{x(LATEST_PACK.blurb)}</p>
            <p className="text-sm text-ink-soft">{t("contentChannelLead")}</p>
            <p className="text-sm tabular-nums text-ink">
              {bank} {t("bankSize")}
              <span className="text-muted">
                {" "}
                · {CORE_QUESTIONS.length} {t("coreBank")}
                {live ? ` · +${LATEST_PACK.questionCount} ${t("packBank")}` : ""}
              </span>
            </p>
            <Progress value={bar} />
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">{phaseLabel}</p>
            {live && installedAt ? (
              <p className="text-xs text-muted">
                {t("lastUpdated")} {new Date(installedAt).toLocaleString(locale)}
              </p>
            ) : null}
            {live ? (
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link to="/mock">{t("openSets")}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/glossary">{t("openGlossary")}</Link>
                </Button>
              </div>
            ) : (
              <Button onClick={runInstall} disabled={phase === "checking" || phase === "applying"}>
                {phase === "checking" || phase === "applying" ? (
                  <RefreshCw className="size-4 animate-spin" />
                ) : (
                  <Download className="size-4" />
                )}
                {phase === "checking" || phase === "applying" ? t("installingPack") : t("installPack")}
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3 pt-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{t("appChannel")}</Badge>
              <Badge tone="sage">{CONTENT_VERSION.id}</Badge>
            </div>
            <h2 className="font-display text-xl">{t("appCurrent")}</h2>
            <p className="text-sm leading-relaxed text-ink-soft">{t("appChannelLead")}</p>
            <p className="text-sm text-ink-soft">
              {t("lastUpdated")} {CONTENT_VERSION.publishedAt} · {t("nextUpdate")} {next.toISOString().slice(0, 10)}
            </p>
            <p className="text-sm leading-relaxed text-ink-soft">{t("cycleAuto")}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              <RefreshCw className="size-4" />
              {t("reloadApp")}
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("whatsInPack")}</h2>
        {PACK_CHANGES.map((c) => (
          <Card key={c.title.en}>
            <CardContent className="space-y-2 pt-5">
              <div className="flex items-start gap-2">
                {live ? <Check className="mt-0.5 size-4 shrink-0 text-sage" /> : null}
                <div className="space-y-1">
                  <p className="font-medium">{x(c.title)}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{x(c.body)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {live && packSets.length ? (
        <section className="space-y-3">
          <h2 className="font-display text-xl">{t("hallSets")}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {packSets.map((m) => (
              <Card key={m.id}>
                <CardContent className="flex h-full flex-col gap-2 pt-5">
                  <p className="font-display text-lg">{x(m.title)}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{x(m.blurb)}</p>
                  <Button asChild className="mt-auto w-fit" size="sm">
                    <Link to="/mock/$id" params={{ id: m.id }}>
                      {t("startThisMock")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("weightageTitle")}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("weightageLead")}</p>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-chip text-muted">
              <tr>
                <th className="px-3 py-2 font-medium">#</th>
                <th className="px-3 py-2 font-medium">{t("unit")}</th>
                <th className="px-3 py-2 font-medium">{t("qsPerPaper")}</th>
              </tr>
            </thead>
            <tbody>
              {WEIGHTAGE.map((row) => (
                <tr key={row.rank} className="border-t border-line">
                  <td className="px-3 py-2 tabular-nums">{row.rank}</td>
                  <td className="px-3 py-2">{x(row.area)}</td>
                  <td className="px-3 py-2 tabular-nums">{row.qs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("week16Title")}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("week16Lead")}</p>
        <div className="grid gap-3 md:grid-cols-2">
          {WEEK16.map((w) => (
            <Card key={w.weeks}>
              <CardContent className="space-y-2 pt-5">
                <p className="text-xs uppercase tracking-[0.14em] text-subtle">{w.weeks}</p>
                <p className="font-display text-lg">{x(w.title)}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{x(w.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <CardContent className="space-y-3 pt-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="prussian">{cycleLabel(cycle, lang)}</Badge>
            <Badge>{CONTENT_VERSION.id}</Badge>
          </div>
          <p className="text-sm text-ink-soft">
            {t("lastUpdated")} {CONTENT_VERSION.publishedAt}
          </p>
          {seen !== cycle ? (
            <Button size="sm" onClick={() => ack(cycle)}>
              {t("acknowledge")}
            </Button>
          ) : null}
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{cycleLabel(cycle, lang)}</h2>
        {current.map((n) => (
          <Card key={n.id}>
            <CardContent className="space-y-2 pt-5">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-prussian">{x(n.area)}</p>
              <RichText text={x(n.body)} />
            </CardContent>
          </Card>
        ))}
      </section>

      {upcoming.length ? (
        <section className="space-y-3">
          <h2 className="font-display text-xl">{t("nextUpdate")}</h2>
          {upcoming.map((n) => (
            <Card key={n.id}>
              <CardContent className="space-y-2 pt-5">
                <p className="text-xs text-muted">{n.cycle}</p>
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-prussian">{x(n.area)}</p>
                <RichText text={x(n.body)} />
              </CardContent>
            </Card>
          ))}
        </section>
      ) : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "h-11 rounded-full bg-ink px-3 text-xs font-medium text-surface"
          : "h-11 rounded-full border border-line bg-surface px-3 text-xs font-medium text-ink-soft"
      }
    >
      {label}
    </button>
  );
}
