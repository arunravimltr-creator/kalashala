import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UNITS_P1, UNITS_VA, questionsForUnit } from "@/data/catalog";
import { useKalashala } from "@/lib/store";
import type { Unit } from "@/lib/types";

export const Route = createFileRoute("/learn/")({ component: LearnIndex });

function LearnIndex() {
  const { t, x } = useT();
  const lessons = useKalashala((s) => s.lessons);

  return (
    <div className="space-y-8">
      <PageHero kicker={t("navLearn")} title={t("navLearn")} lead={t("learnLead")} />

      <PaperBlock
        label={t("paper1")}
        full={t("paper1Full")}
        note={t("p1Units")}
        units={UNITS_P1}
        lessons={lessons}
        x={x}
        t={t}
      />
      <PaperBlock
        label={t("paperVa")}
        full={t("paperVaFull")}
        note={t("vaUnits")}
        units={UNITS_VA}
        lessons={lessons}
        x={x}
        t={t}
      />
    </div>
  );
}

function PaperBlock({
  label,
  full,
  note,
  units,
  lessons,
  x,
  t,
}: {
  label: string;
  full: string;
  note: string;
  units: Unit[];
  lessons: Record<string, { completed: boolean }>;
  x: (text: { en: string; ml: string }) => string;
  t: ReturnType<typeof useT>["t"];
}) {
  const done = units.filter((u) => lessons[u.id]?.completed).length;
  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-display text-xl">{label}</h2>
          <p className="text-sm text-ink-soft">{full}</p>
          <p className="mt-1 text-xs text-muted">{note}</p>
        </div>
        <p className="text-sm tabular-nums text-muted">
          {done}/10
        </p>
      </div>
      <Progress value={done * 10} />
      <div className="grid gap-3 sm:grid-cols-2">
        {units.map((u) => {
          const n = questionsForUnit(u.id).length;
          const mastered = Boolean(lessons[u.id]?.completed);
          return (
            <Link
              key={u.id}
              to="/learn/$paper/$unit"
              params={{ paper: u.paper, unit: u.id }}
              className="block"
            >
              <Card className="h-full transition-colors hover:border-prussian/40">
                <CardContent className="flex h-full flex-col gap-2 pt-5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">
                      {t("unit")} {u.no}
                    </p>
                    {mastered ? <Badge tone="sage">{t("markedDone")}</Badge> : null}
                  </div>
                  <p className="font-display text-lg leading-snug">{x(u.title)}</p>
                  <p className="line-clamp-2 text-sm text-ink-soft">{x(u.examNote)}</p>
                  <p className="mt-auto pt-2 text-xs text-muted">
                    {n} {t("qCount")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
