import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CONTENT_VERSION,
  CYCLE_NOTES,
  cycleFromDate,
  cycleLabel,
  nextCycleDate,
  notesFor,
} from "@/lib/cycle";
import { useKalashala } from "@/lib/store";

export const Route = createFileRoute("/updates")({ component: UpdatesPage });

function UpdatesPage() {
  const { t, x, lang } = useT();
  const cycle = cycleFromDate();
  const ack = useKalashala((s) => s.ackCycle);
  const seen = useKalashala((s) => s.seenCycle);
  const next = nextCycleDate(cycle);
  const current = notesFor(cycle);
  const upcoming = CYCLE_NOTES.filter((n) => n.cycle !== cycle);

  return (
    <div className="space-y-8">
      <PageHero kicker={t("cyclePack")} title={t("navUpdates")} lead={t("updatesLead")} />

      <Card className="border-prussian/30 bg-prussian/5">
        <CardContent className="space-y-3 pt-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="prussian">{cycleLabel(cycle, lang)}</Badge>
            <Badge>{CONTENT_VERSION.id}</Badge>
          </div>
          <p className="text-sm text-ink-soft">
            {t("lastUpdated")} {CONTENT_VERSION.publishedAt}
          </p>
          <p className="text-sm text-ink-soft">
            {t("nextUpdate")} {next.toISOString().slice(0, 10)}
          </p>
          <p className="text-sm leading-relaxed text-ink-soft">{t("cycleAuto")}</p>
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
