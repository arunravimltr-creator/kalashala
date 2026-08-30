import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { useT } from "@/components/t";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { METHODS } from "@/data/methods";

export const Route = createFileRoute("/methods")({ component: MethodsPage });

function MethodsPage() {
  const { t, x } = useT();
  return (
    <div className="space-y-8">
      <PageHero kicker={t("navMethods")} title={t("navMethods")} lead={t("methodsIntro")} />
      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/learn">{t("navLearn")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/exam">{t("navExam")}</Link>
        </Button>
      </div>
      <div className="space-y-4">
        {METHODS.map((block) => (
          <Card key={block.id}>
            <CardContent className="space-y-3 pt-5">
              <h2 className="font-display text-xl">{x(block.title)}</h2>
              <RichText text={x(block.body)} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
