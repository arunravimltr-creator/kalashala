import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { QuizPlayer } from "@/components/quiz-player";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { predictedQuestions, unitById } from "@/data/catalog";

export const Route = createFileRoute("/predicted")({ component: PredictedPage });

function PredictedPage() {
  const { t, x } = useT();
  const [play, setPlay] = useState(false);
  const questions = predictedQuestions();

  if (play) {
    return (
      <div className="space-y-6">
        <PageHero kicker={t("predictedBadge")} title={t("navPredicted")} />
        <QuizPlayer questions={questions} mode="practice" mockId="predicted-study" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHero kicker={t("highYield")} title={t("navPredicted")} lead={t("predictedHero")} />
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setPlay(true)} disabled={questions.length === 0}>
          {t("start")} · {questions.length} {t("questions")}
        </Button>
        <Button variant="outline" asChild>
          <Link to="/mock/$id" params={{ id: "predicted" }}>
            {t("timed")}
          </Link>
        </Button>
      </div>
      <div className="grid gap-3">
        {questions.map((q) => {
          const unit = unitById(q.unitId);
          return (
            <Card key={q.id}>
              <CardContent className="space-y-2 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  <Badge tone="amber">{t("predictedBadge")}</Badge>
                  {q.difficulty === "jrf" ? <Badge tone="prussian">{t("jrfLevel")}</Badge> : <Badge>{t("netLevel")}</Badge>}
                  {unit ? (
                    <Badge>
                      {t("fromUnit")} {x(unit.title)}
                    </Badge>
                  ) : null}
                </div>
                <p className="font-display text-base leading-snug">{x(q.q)}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
