import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MOCKS, questionsForMock } from "@/data/catalog";
import { useKalashala } from "@/lib/store";

export const Route = createFileRoute("/mock/")({ component: MockIndex });

function MockIndex() {
  const { t, x } = useT();
  const attempts = useKalashala((s) => s.attempts);

  return (
    <div className="space-y-8">
      <PageHero kicker={t("timed")} title={t("navMocks")} lead={t("mockListLead")} />
      <p className="text-sm text-ink-soft">{t("densityNote")}</p>
      <div className="grid gap-3">
        {MOCKS.map((m) => {
          const n = questionsForMock(m).length;
          const open = attempts.find((a) => a.mockId === m.id && !a.finishedAt);
          const last = [...attempts].reverse().find((a) => a.mockId === m.id && a.finishedAt);
          return (
            <Card key={m.id}>
              <CardContent className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {m.kind === "combined" ? <Badge tone="prussian">{t("jrf")}</Badge> : null}
                    {m.kind === "predicted" ? <Badge tone="amber">{t("predictedBadge")}</Badge> : null}
                    {open ? <Badge tone="amber">{t("unfinished")}</Badge> : null}
                  </div>
                  <h2 className="font-display text-xl">{x(m.title)}</h2>
                  <p className="max-w-xl text-sm leading-relaxed text-ink-soft">{x(m.blurb)}</p>
                  <p className="text-xs text-muted">
                    {n} {t("questions")} · {m.minutes} {t("minutes")} · {n * 2} {t("marks")} · {t("noNeg")}
                  </p>
                  {last?.finishedAt ? (
                    <p className="text-xs text-muted">
                      {t("mockHistory")}: {new Date(last.finishedAt).toLocaleString()}
                    </p>
                  ) : null}
                </div>
                <Button asChild>
                  <Link to="/mock/$id" params={{ id: m.id }}>
                    {open ? t("resumeMock") : t("startThisMock")}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
