import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { QuizPlayer } from "@/components/quiz-player";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  UNITS_P1,
  UNITS_VA,
  predictedQuestions,
  questionById,
  questionsForUnit,
} from "@/data/catalog";
import { scoreAttempt } from "@/lib/quiz";
import { useKalashala } from "@/lib/store";
import type { Question, Unit } from "@/lib/types";

type Pack = "due" | "wrong" | "predicted";

export const Route = createFileRoute("/practice/")({
  validateSearch: (search: Record<string, unknown>): { pack?: Pack; from?: string } => ({
    pack: search.pack === "due" || search.pack === "wrong" || search.pack === "predicted" ? search.pack : undefined,
    from: typeof search.from === "string" ? search.from : undefined,
  }),
  component: PracticeIndex,
});

function PracticeIndex() {
  const { t, x } = useT();
  const { pack, from } = Route.useSearch();
  const reviews = useKalashala((s) => s.reviews);
  const logs = useKalashala((s) => s.logs);
  const attempts = useKalashala((s) => s.attempts);

  const dueIds = Object.values(reviews)
    .filter((r) => r.dueAt <= Date.now())
    .map((r) => r.questionId);

  const wrongFromAttempt = (() => {
    if (!from) return null;
    const att = attempts.find((a) => a.id === from);
    if (!att) return null;
    const qs = att.questionIds.map(questionById).filter((q): q is Question => Boolean(q));
    return scoreAttempt(att, qs).wrongIds;
  })();

  const wrongIds =
    wrongFromAttempt ?? [...new Set(logs.filter((l) => !l.correct).map((l) => l.questionId))];

  if (pack) {
    const ids = pack === "due" ? dueIds : pack === "wrong" ? wrongIds : predictedQuestions().map((q) => q.id);
    const questions = ids.map(questionById).filter((q): q is Question => Boolean(q));
    const title = pack === "due" ? t("duePack") : pack === "wrong" ? t("wrongPack") : t("navPredicted");
    if (questions.length === 0) {
      return (
        <div className="space-y-4">
          <PageHero title={title} />
          <p className="text-ink-soft">
            {pack === "due" ? t("emptyDue") : pack === "wrong" ? t("emptyWrong") : t("emptyPractice")}
          </p>
          <Button asChild variant="outline">
            <Link to="/practice">{t("back")}</Link>
          </Button>
        </div>
      );
    }
    return (
      <div className="space-y-4">
        <PageHero kicker={t("untimed")} title={title} />
        <QuizPlayer questions={questions} mode="practice" mockId={`pack-${pack}`} />
      </div>
    );
  }

  const due = dueIds.length;
  const wrong = wrongIds.length;

  return (
    <div className="space-y-8">
      <PageHero kicker={t("navPractice")} title={t("navPractice")} lead={t("practiceLead")} />

      <div className="flex flex-wrap gap-2">
        {due > 0 ? (
          <Button asChild>
            <Link to="/practice" search={{ pack: "due" }}>
              {t("startDue")}
              <Badge tone="ink">{due}</Badge>
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            {t("startDue")}
          </Button>
        )}
        {wrong > 0 ? (
          <Button asChild variant="outline">
            <Link to="/practice" search={{ pack: "wrong" }}>
              {t("startWrong")}
              <Badge>{wrong}</Badge>
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            {t("startWrong")}
          </Button>
        )}
        <Button asChild variant="outline">
          <Link to="/predicted">{t("openPredicted")}</Link>
        </Button>
      </div>

      <UnitGrid title={t("paper1")} units={UNITS_P1} x={x} t={t} />
      <UnitGrid title={t("paperVa")} units={UNITS_VA} x={x} t={t} />
    </div>
  );
}

function UnitGrid({
  title,
  units,
  x,
  t,
}: {
  title: string;
  units: Unit[];
  x: (text: { en: string; ml: string }) => string;
  t: ReturnType<typeof useT>["t"];
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {units.map((u) => {
          const n = questionsForUnit(u.id).length;
          return (
            <Card key={u.id}>
              <CardContent className="flex items-start justify-between gap-3 pt-5">
                <div className="min-w-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">
                    {t("unit")} {u.no}
                  </p>
                  <p className="font-display text-lg leading-snug">{x(u.title)}</p>
                  <p className="mt-1 text-xs text-muted">
                    {n} {t("questions")}
                  </p>
                </div>
                <Button size="sm" asChild>
                  <Link to="/practice/$unit" params={{ unit: u.id }}>
                    {t("practiceUnit")}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
