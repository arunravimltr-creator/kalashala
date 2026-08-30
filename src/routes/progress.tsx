import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ALL_UNITS, UNITS_P1, UNITS_VA, mockById, questionById } from "@/data/catalog";
import { accuracy, scaledBand, scoreAttempt } from "@/lib/quiz";
import { useKalashala } from "@/lib/store";
import type { Question } from "@/lib/types";

export const Route = createFileRoute("/progress")({ component: ProgressPage });

function ProgressPage() {
  const { t, x } = useT();
  const lessons = useKalashala((s) => s.lessons);
  const logs = useKalashala((s) => s.logs);
  const attempts = useKalashala((s) => s.attempts);
  const streak = useKalashala((s) => s.streak);
  const category = useKalashala((s) => s.category);
  const resetAll = useKalashala((s) => s.resetAll);
  const [confirm, setConfirm] = useState(false);

  const p1 = UNITS_P1.filter((u) => lessons[u.id]?.completed).length;
  const va = UNITS_VA.filter((u) => lessons[u.id]?.completed).length;
  const correct = logs.filter((l) => l.correct).length;
  const finished = [...attempts].filter((a) => a.finishedAt).sort((a, b) => (b.finishedAt ?? 0) - (a.finishedAt ?? 0));

  const unitAcc = ALL_UNITS.map((u) => {
    const unitLogs = logs.filter((l) => questionById(l.questionId)?.unitId === u.id);
    const ok = unitLogs.filter((l) => l.correct).length;
    return { u, total: unitLogs.length, ok, pct: unitLogs.length ? Math.round((ok / unitLogs.length) * 100) : null };
  });
  const weak = unitAcc.filter((s) => s.pct !== null && s.pct < 60).sort((a, b) => (a.pct ?? 0) - (b.pct ?? 0));
  const strong = unitAcc.filter((s) => s.pct !== null && s.pct >= 75).sort((a, b) => (b.pct ?? 0) - (a.pct ?? 0));

  return (
    <div className="space-y-8">
      <PageHero kicker={t("navProgress")} title={t("progressTitle")} lead={t("progressLead")} />

      <section className="grid gap-3 sm:grid-cols-3">
        <Stat label={t("paper1")} value={`${p1}/10`} bar={p1 * 10} />
        <Stat label={t("paperVa")} value={`${va}/10`} bar={va * 10} />
        <Card>
          <CardContent className="space-y-1 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("streak")}</p>
            <p className="font-display text-3xl tabular-nums">
              {streak}
              <span className="ml-1 text-base text-muted">{t("days")}</span>
            </p>
            <p className="text-xs text-muted">
              {t("answered")} {logs.length} · {t("accuracy")} {accuracy(correct, logs.length)}%
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-3 pt-5">
            <h2 className="font-display text-xl">{t("weakUnits")}</h2>
            {weak.length === 0 ? (
              <p className="text-sm text-ink-soft">{t("emptyPractice")}</p>
            ) : (
              weak.slice(0, 6).map(({ u, pct, ok, total }) => (
                <Link
                  key={u.id}
                  to="/learn/$paper/$unit"
                  params={{ paper: u.paper, unit: u.id }}
                  className="flex items-center justify-between gap-2 text-sm hover:underline"
                >
                  <span>{x(u.title)}</span>
                  <span className="tabular-nums text-brick">
                    {ok}/{total} · {pct}%
                  </span>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 pt-5">
            <h2 className="font-display text-xl">{t("strongUnits")}</h2>
            {strong.length === 0 ? (
              <p className="text-sm text-ink-soft">{t("emptyPractice")}</p>
            ) : (
              strong.slice(0, 6).map(({ u, pct, ok, total }) => (
                <Link
                  key={u.id}
                  to="/learn/$paper/$unit"
                  params={{ paper: u.paper, unit: u.id }}
                  className="flex items-center justify-between gap-2 text-sm hover:underline"
                >
                  <span>{x(u.title)}</span>
                  <span className="tabular-nums text-sage">
                    {ok}/{total} · {pct}%
                  </span>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("mockHistory")}</h2>
        {finished.length === 0 ? (
          <p className="text-sm text-ink-soft">{t("noMocks")}</p>
        ) : (
          <div className="grid gap-2">
            {finished.map((a) => {
              const qs = a.questionIds.map(questionById).filter((q): q is Question => Boolean(q));
              const scored = scoreAttempt(a, qs);
              const band = scaledBand(scored.marks, scored.max, category);
              const mock = mockById(a.mockId);
              return (
                <Link key={a.id} to="/results/$id" params={{ id: a.id }} className="block">
                  <Card className="transition-colors hover:border-prussian/40">
                    <CardContent className="flex flex-wrap items-center justify-between gap-2 pt-5">
                      <div>
                        <p className="font-display">{mock ? x(mock.title) : t("practiceResult")}</p>
                        <p className="text-xs text-muted">
                          {a.finishedAt ? new Date(a.finishedAt).toLocaleString() : ""}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="tabular-nums text-sm">
                          {scored.marks}/{scored.max}
                        </span>
                        <Badge tone={band.band === "jrf" ? "sage" : band.band === "net" ? "prussian" : "brick"}>
                          {band.scaled}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <div>
        {confirm ? (
          <Card className="border-brick/30">
            <CardContent className="space-y-3 pt-5">
              <p className="text-sm leading-relaxed text-ink-soft">{t("resetConfirm")}</p>
              <div className="flex gap-2">
                <Button variant="brick" onClick={() => { resetAll(); setConfirm(false); }}>
                  {t("resetLocal")}
                </Button>
                <Button variant="ghost" onClick={() => setConfirm(false)}>
                  {t("cancel")}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button variant="ghost" onClick={() => setConfirm(true)}>
            {t("resetLocal")}
          </Button>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, bar }: { label: string; value: string; bar: number }) {
  return (
    <Card>
      <CardContent className="space-y-2 pt-5">
        <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{label}</p>
        <p className="font-display text-3xl tabular-nums">{value}</p>
        <Progress value={bar} />
      </CardContent>
    </Card>
  );
}
