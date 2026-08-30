import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { TeachPanel } from "@/components/teach-panel";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { mockById, questionById, unitById } from "@/data/catalog";
import { accuracy, scaledBand, scoreAttempt } from "@/lib/quiz";
import { useKalashala } from "@/lib/store";
import type { Question } from "@/lib/types";

export const Route = createFileRoute("/results/$id")({ component: ResultsPage });

function ResultsPage() {
  const { id } = Route.useParams();
  const { t, x } = useT();
  const attempts = useKalashala((s) => s.attempts);
  const category = useKalashala((s) => s.category);
  const attempt = attempts.find((a) => a.id === id);

  if (!attempt) {
    return (
      <div className="space-y-3">
        <p className="text-ink-soft">{t("noAttempt")}</p>
        <Button asChild variant="outline">
          <Link to="/mock">{t("back")}</Link>
        </Button>
      </div>
    );
  }

  const questions = attempt.questionIds.map(questionById).filter((q): q is Question => Boolean(q));
  const scored = scoreAttempt(attempt, questions);
  const band = scaledBand(scored.marks, scored.max, category);
  const mock = mockById(attempt.mockId);
  const title = mock ? x(mock.title) : t("practiceResult");
  const bandLabel = band.band === "jrf" ? t("jrfBand") : band.band === "net" ? t("netBand") : t("below");
  const bandTone = band.band === "jrf" ? "sage" : band.band === "net" ? "prussian" : "brick";

  const chosenOf = (qid: string) => attempt.answers.find((a) => a.questionId === qid)?.chosen ?? null;
  const wrongQs = scored.wrongIds.map(questionById).filter((q): q is Question => Boolean(q));
  const blankQs = attempt.answers
    .filter((a) => a.chosen === null)
    .map((a) => questionById(a.questionId))
    .filter((q): q is Question => Boolean(q));

  return (
    <div className="space-y-8">
      <PageHero kicker={t("seeResults")} title={title} lead={t("scaledHint")} />

      <section className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardContent className="space-y-1 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("score")}</p>
            <p className="font-display text-3xl tabular-nums">
              {scored.marks}
              <span className="ml-1 text-base text-muted">/ {scored.max}</span>
            </p>
            <p className="text-xs text-muted">
              {t("accuracy")} {accuracy(scored.correct, questions.length)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-1 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("scaledScore")}</p>
            <p className="font-display text-3xl tabular-nums">
              {band.scaled}
              <span className="ml-1 text-base text-muted">{t("of300")}</span>
            </p>
            <Badge tone={bandTone}>{bandLabel}</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-5 text-sm text-ink-soft">
            <p>
              {t("correct")}: <span className="tabular-nums text-ink">{scored.correct}</span>
            </p>
            <p>
              {t("wrong")}: <span className="tabular-nums text-ink">{scored.wrong}</span>
            </p>
            <p>
              {t("blank")}: <span className="tabular-nums text-ink">{scored.blank}</span>
            </p>
            <p className="text-xs text-muted">
              {t("jrf")} {band.jrfLine} · {t("netAp")} {band.netLine} · {category}
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="flex flex-wrap gap-2">
        {scored.wrong > 0 ? (
          <Button asChild>
            <Link to="/practice" search={{ pack: "wrong", from: attempt.id }}>
              {t("retryWrong")}
            </Link>
          </Button>
        ) : null}
        <Button variant="outline" asChild>
          <Link to="/mistakes">{t("navMistakes")}</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/mock">{t("navMocks")}</Link>
        </Button>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("unitWise")}</h2>
        <div className="grid gap-2">
          {Object.entries(scored.unitTally).map(([uid, slot]) => {
            const u = unitById(uid);
            const pct = slot.total ? Math.round((slot.correct / slot.total) * 100) : 0;
            return (
              <div key={uid} className="space-y-1">
                <div className="flex items-baseline justify-between gap-2 text-sm">
                  <Link
                    to="/learn/$paper/$unit"
                    params={{ paper: u?.paper ?? "p1", unit: uid }}
                    className="hover:underline"
                  >
                    {u ? x(u.title) : uid}
                  </Link>
                  <span className="tabular-nums text-muted">
                    {slot.correct}/{slot.total} · {pct}%
                  </span>
                </div>
                <Progress value={pct} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("mistakesTitle")}</h2>
        {wrongQs.length === 0 && blankQs.length === 0 ? (
          <p className="text-sm text-ink-soft">{t("mistakesEmpty")}</p>
        ) : (
          <div className="space-y-4">
            {[...wrongQs, ...blankQs].map((q) => (
              <Card key={q.id}>
                <CardContent className="space-y-3 pt-5">
                  <p className="text-xs text-muted">{unitById(q.unitId) ? x(unitById(q.unitId)!.title) : q.unitId}</p>
                  <p className="font-display text-lg leading-snug">{x(q.q)}</p>
                  <TeachPanel q={q} chosen={chosenOf(q.id)} />
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/learn/$paper/$unit" params={{ paper: q.paper, unit: q.unitId }}>
                      {t("openLesson")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
