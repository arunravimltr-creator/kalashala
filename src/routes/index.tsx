import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ALL_UNITS, UNITS_P1, UNITS_VA, predictedQuestions } from "@/data/catalog";
import { CONTENT_VERSION, CUTOFFS, JRF_TARGET, cycleFromDate, cycleLabel, notesFor } from "@/lib/cycle";
import { useKalashala } from "@/lib/store";
import { accuracy } from "@/lib/quiz";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, x, lang } = useT();
  const lessons = useKalashala((s) => s.lessons);
  const logs = useKalashala((s) => s.logs);
  const streak = useKalashala((s) => s.streak);
  const category = useKalashala((s) => s.category);
  const setCategory = useKalashala((s) => s.setCategory);
  const seen = useKalashala((s) => s.seenCycle);
  const ack = useKalashala((s) => s.ackCycle);
  const reviews = useKalashala((s) => s.reviews);
  const cycle = cycleFromDate();
  const newCycle = seen !== cycle;

  const mastered = ALL_UNITS.filter((u) => lessons[u.id]?.completed).length;
  const due = Object.values(reviews).filter((r) => r.dueAt <= Date.now()).length;
  const correct = logs.filter((l) => l.correct).length;
  const target = JRF_TARGET[category];
  const p1done = UNITS_P1.filter((u) => lessons[u.id]?.completed).length;
  const vadone = UNITS_VA.filter((u) => lessons[u.id]?.completed).length;
  const nextUnit = ALL_UNITS.find((u) => !lessons[u.id]?.completed) ?? ALL_UNITS[0];
  const notes = notesFor(cycle).slice(0, 2);

  return (
    <div className="space-y-8">
      {newCycle ? (
        <Card className="border-prussian/30 bg-prussian/5">
          <CardContent className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm leading-relaxed text-ink-soft">{t("newCycle")}</p>
            <Button size="sm" onClick={() => ack(cycle)}>
              {t("acknowledge")}
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <section className="space-y-3">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-subtle">{t("studio")}</p>
        <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          {t("appName")}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ink-soft">{t("homeLead")}</p>
        <div className="flex flex-wrap gap-2">
          {nextUnit ? (
            <Button asChild>
              <Link to="/learn/$paper/$unit" params={{ paper: nextUnit.paper, unit: nextUnit.id }}>
                {t("startHere")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : null}
          <Button variant="outline" asChild>
            <Link to="/predicted">{t("openPredicted")}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/mock/$id" params={{ id: "combined" }}>
              {t("fullCombined")}
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardContent className="space-y-2 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("target")}</p>
            <p className="font-display text-3xl tabular-nums">
              {target}
              <span className="ml-1 text-base text-muted">{t("of300")}</span>
            </p>
            <p className="text-xs text-muted">
              {t("jrf")} · {category} · Dec 2025 {CUTOFFS.dec2025.jrf[category]}
            </p>
            <label className="block text-xs text-muted">
              {t("category")}
              <select
                className="mt-1 h-10 w-full rounded-md border border-line bg-surface px-2 text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value as typeof category)}
              >
                {(["UR", "EWS", "OBC", "SC", "ST"] as const).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("paper1")}</p>
            <p className="font-display text-3xl tabular-nums">
              {p1done}
              <span className="text-base text-muted"> / 10</span>
            </p>
            <Progress value={p1done * 10} />
            <p className="text-xs text-muted">{t("fiveEach")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("paperVa")}</p>
            <p className="font-display text-3xl tabular-nums">
              {vadone}
              <span className="text-base text-muted"> / 10</span>
            </p>
            <Progress value={vadone * 10} />
            <p className="text-xs text-muted">{x(UNITS_VA[0]!.examNote).slice(0, 80)}…</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-3 pt-5">
            <h2 className="font-display text-xl">{t("todayPlan")}</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>
                {t("lessonsDone")}: <span className="tabular-nums text-ink">{mastered}/20</span>
              </li>
              <li>
                {t("dueReviews")}: <span className="tabular-nums text-ink">{due}</span>
                {due === 0 ? ` — ${t("noDue")}` : null}
              </li>
              <li>
                {t("streak")}: <span className="tabular-nums text-ink">{streak}</span> {t("days")}
              </li>
              <li>
                {t("answered")}: {logs.length} · {t("accuracy")} {accuracy(correct, logs.length)}%
              </li>
            </ul>
            {due > 0 ? (
              <Button asChild variant="outline" size="sm">
                <Link to="/mistakes">{t("navMistakes")}</Link>
              </Button>
            ) : nextUnit ? (
              <Button asChild variant="outline" size="sm">
                <Link to="/learn/$paper/$unit" params={{ paper: nextUnit.paper, unit: nextUnit.id }}>
                  {x(nextUnit.title)}
                </Link>
              </Button>
            ) : null}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 pt-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-display text-xl">{t("cycle")}</h2>
              <Badge tone="prussian">{cycleLabel(cycle, lang)}</Badge>
            </div>
            <p className="text-sm text-ink-soft">
              {t("lastUpdated")} {CONTENT_VERSION.publishedAt} · {t("nextUpdate")} 2027-01-01
            </p>
            <ul className="space-y-2">
              {notes.map((n) => (
                <li key={n.id} className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">{x(n.area)}.</span> {x(n.body).slice(0, 140)}…
                </li>
              ))}
            </ul>
            <Button asChild variant="ghost" size="sm">
              <Link to="/updates">{t("navUpdates")}</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl">{t("navPredicted")}</h2>
          <Badge tone="amber">{predictedQuestions().length}</Badge>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("predictedHero")}</p>
        <Button asChild>
          <Link to="/predicted">{t("openPredicted")}</Link>
        </Button>
      </section>
    </div>
  );
}
