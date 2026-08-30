import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { QuizPlayer } from "@/components/quiz-player";
import { useT } from "@/components/t";
import { Button } from "@/components/ui/button";
import { questionsForUnit, unitById } from "@/data/catalog";

export const Route = createFileRoute("/practice/$unit")({ component: UnitPractice });

function UnitPractice() {
  const { unit: unitId } = Route.useParams();
  const { t, x } = useT();
  const unit = unitById(unitId);
  const questions = questionsForUnit(unitId);

  if (!unit) {
    return (
      <div className="space-y-3">
        <p className="text-ink-soft">{t("missingUnit")}</p>
        <Button asChild variant="outline">
          <Link to="/practice">{t("back")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHero
        kicker={`${unit.paper === "p1" ? t("paper1") : t("paperVa")} · ${t("untimed")}`}
        title={x(unit.title)}
        lead={x(unit.method)}
      />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" asChild>
          <Link to="/learn/$paper/$unit" params={{ paper: unit.paper, unit: unit.id }}>
            {t("readLesson")}
          </Link>
        </Button>
      </div>
      <QuizPlayer questions={questions} mode="practice" mockId={`unit-${unit.id}`} />
    </div>
  );
}
