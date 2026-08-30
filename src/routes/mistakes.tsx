import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { TeachPanel } from "@/components/teach-panel";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { questionById, unitById } from "@/data/catalog";
import { useKalashala } from "@/lib/store";
import type { Question } from "@/lib/types";

export const Route = createFileRoute("/mistakes")({ component: MistakesPage });

function MistakesPage() {
  const { t, x } = useT();
  const logs = useKalashala((s) => s.logs);
  const reviews = useKalashala((s) => s.reviews);

  const wrongLogs = [...logs].filter((l) => !l.correct).reverse();
  const seen = new Set<string>();
  const unique: { q: Question; chosen: number; at: number }[] = [];
  for (const log of wrongLogs) {
    if (seen.has(log.questionId)) continue;
    const q = questionById(log.questionId);
    if (!q) continue;
    seen.add(log.questionId);
    unique.push({ q, chosen: log.chosen, at: log.at });
  }

  const due = Object.values(reviews).filter((r) => r.dueAt <= Date.now()).length;

  return (
    <div className="space-y-8">
      <PageHero kicker={t("navMistakes")} title={t("mistakesTitle")} lead={t("teachingAfter")} />

      <div className="flex flex-wrap gap-2">
        {unique.length > 0 ? (
          <Button asChild>
            <Link to="/practice" search={{ pack: "wrong" }}>
              {t("retryWrong")}
            </Link>
          </Button>
        ) : null}
        {due > 0 ? (
          <Button variant="outline" asChild>
            <Link to="/practice" search={{ pack: "due" }}>
              {t("startDue")}
              <Badge>{due}</Badge>
            </Link>
          </Button>
        ) : null}
      </div>

      {unique.length === 0 ? (
        <p className="text-sm leading-relaxed text-ink-soft">{t("mistakesEmpty")}</p>
      ) : (
        <div className="space-y-4">
          {unique.map(({ q, chosen }) => {
            const unit = unitById(q.unitId);
            const card = reviews[q.id];
            return (
              <Card key={q.id}>
                <CardContent className="space-y-3 pt-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {unit ? <Badge>{x(unit.title)}</Badge> : null}
                    {card && card.lapses > 0 ? (
                      <Badge tone="brick">
                        {card.lapses}× {t("wrong")}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="font-display text-lg leading-snug">{x(q.q)}</p>
                  <TeachPanel q={q} chosen={chosen} />
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/learn/$paper/$unit" params={{ paper: q.paper, unit: q.unitId }}>
                      {t("openLesson")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
