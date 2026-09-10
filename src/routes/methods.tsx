import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { useT } from "@/components/t";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { METHODS } from "@/data/methods";
import { WEIGHTAGE, WEEK16 } from "@/data/pack-meta";

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
        <Button variant="ghost" asChild>
          <Link to="/glossary">{t("navGlossary")}</Link>
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

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("week16Title")}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("week16Lead")}</p>
        <div className="grid gap-3 md:grid-cols-2">
          {WEEK16.map((w) => (
            <Card key={w.weeks}>
              <CardContent className="space-y-2 pt-5">
                <p className="text-xs uppercase tracking-[0.14em] text-subtle">{w.weeks}</p>
                <p className="font-display text-lg">{x(w.title)}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{x(w.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("weightageTitle")}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("weightageLead")}</p>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-chip text-muted">
              <tr>
                <th className="px-3 py-2 font-medium">#</th>
                <th className="px-3 py-2 font-medium">{t("unit")}</th>
                <th className="px-3 py-2 font-medium">{t("qsPerPaper")}</th>
              </tr>
            </thead>
            <tbody>
              {WEIGHTAGE.map((row) => (
                <tr key={row.rank} className="border-t border-line">
                  <td className="px-3 py-2 tabular-nums">{row.rank}</td>
                  <td className="px-3 py-2">{x(row.area)}</td>
                  <td className="px-3 py-2 tabular-nums">{row.qs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
