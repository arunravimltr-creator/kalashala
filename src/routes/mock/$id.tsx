import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { QuizPlayer } from "@/components/quiz-player";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockById, questionById, questionsForMock } from "@/data/catalog";
import { makeAttempt } from "@/lib/quiz";
import { useKalashala } from "@/lib/store";
import type { Question } from "@/lib/types";

export const Route = createFileRoute("/mock/$id")({
  validateSearch: (search: Record<string, unknown>): { run?: string } => ({
    run: typeof search.run === "string" ? search.run : undefined,
  }),
  component: MockPlay,
});

function MockPlay() {
  const { id } = Route.useParams();
  const { run } = Route.useSearch();
  const { t, x } = useT();
  const navigate = useNavigate();
  const attempts = useKalashala((s) => s.attempts);
  const upsert = useKalashala((s) => s.upsertAttempt);

  const mock = mockById(id);
  if (!mock) {
    return (
      <div className="space-y-3">
        <p className="text-ink-soft">{t("missingMock")}</p>
        <Button asChild variant="outline">
          <Link to="/mock">{t("back")}</Link>
        </Button>
      </div>
    );
  }
  const spec = mock;

  const questions = questionsForMock(spec);
  const unfinished = attempts.find((a) => a.mockId === spec.id && !a.finishedAt);
  const attempt = run ? attempts.find((a) => a.id === run) : undefined;

  if (attempt && !attempt.finishedAt) {
    const qs = attempt.questionIds.map(questionById).filter((q): q is Question => Boolean(q));
    return (
      <div className="space-y-6">
        <PageHero kicker={t("timed")} title={x(spec.title)} />
        <QuizPlayer
          questions={qs.length ? qs : questions}
          mode="mock"
          mockId={spec.id}
          attemptId={attempt.id}
          minutes={spec.minutes}
        />
      </div>
    );
  }

  function startFresh() {
    const next = makeAttempt(spec.id, questions, spec.minutes);
    upsert(next);
    void navigate({ to: "/mock/$id", params: { id: spec.id }, search: { run: next.id } });
  }

  function resume() {
    if (!unfinished) return;
    void navigate({ to: "/mock/$id", params: { id: spec.id }, search: { run: unfinished.id } });
  }

  return (
    <div className="space-y-6">
      <PageHero kicker={t("timed")} title={x(spec.title)} lead={x(spec.blurb)} />
      <Card>
        <CardContent className="space-y-3 pt-5">
          <div className="flex flex-wrap gap-1.5">
            <Badge>{questions.length} {t("questions")}</Badge>
            <Badge>{spec.minutes} {t("minutes")}</Badge>
            <Badge>{questions.length * 2} {t("marks")}</Badge>
            <Badge tone="sage">{t("noNeg")}</Badge>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">{t("attemptAll")}</p>
          {unfinished ? (
            <p className="text-sm text-amber">{t("unfinished")}</p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {unfinished ? (
              <Button onClick={resume}>{t("resumeMock")}</Button>
            ) : null}
            <Button variant={unfinished ? "outline" : "default"} onClick={startFresh}>
              {unfinished ? t("sitAgain") : t("startThisMock")}
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/mock">{t("back")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
