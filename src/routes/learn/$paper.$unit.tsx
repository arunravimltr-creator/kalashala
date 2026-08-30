import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { RichText } from "@/components/rich-text";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ALL_UNITS, questionsForUnit, unitById, unitsFor } from "@/data/catalog";
import { useKalashala } from "@/lib/store";
import type { PaperId } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn/$paper/$unit")({ component: LessonPage });

function LessonPage() {
  const { paper, unit: unitId } = Route.useParams();
  const { t, x } = useT();
  const markLesson = useKalashala((s) => s.markLesson);
  const touch = useKalashala((s) => s.touchStreak);
  const lessons = useKalashala((s) => s.lessons);
  const [openFlash, setOpenFlash] = useState<number | null>(null);

  const unit = unitById(unitId);
  const paperOk = paper === "p1" || paper === "va";

  useEffect(() => {
    touch();
  }, [touch, unitId]);

  if (!unit || !paperOk || unit.paper !== paper) {
    return (
      <div className="space-y-3">
        <p className="text-ink-soft">{t("missingUnit")}</p>
        <Button asChild variant="outline">
          <Link to="/learn">{t("back")}</Link>
        </Button>
      </div>
    );
  }

  const siblings = unitsFor(unit.paper as PaperId);
  const idx = siblings.findIndex((u) => u.id === unit.id);
  const prev = idx > 0 ? siblings[idx - 1] : undefined;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : ALL_UNITS.find((u) => u.paper !== unit.paper);
  const mastered = Boolean(lessons[unit.id]?.completed);
  const nQ = questionsForUnit(unit.id).length;

  return (
    <article className="space-y-8">
      <div className="space-y-3">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
          {unit.paper === "p1" ? t("paper1") : t("paperVa")} · {t("unit")} {unit.no}
        </p>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{x(unit.title)}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{x(unit.examNote)}</p>
        <div className="flex flex-wrap gap-2">
          {mastered ? <Badge tone="sage">{t("markedDone")}</Badge> : null}
          <Badge>{nQ} {t("qCount")}</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/practice/$unit" params={{ unit: unit.id }}>
              {t("practiceUnit")}
            </Link>
          </Button>
          {mastered ? null : (
            <Button variant="outline" onClick={() => markLesson(unit.id)}>
              {t("markDone")}
            </Button>
          )}
        </div>
      </div>

      <Frame title={t("whyJrf")} body={x(unit.jrfWhy)} />
      <Frame title={t("howAsked")} body={x(unit.howAsked)} />
      <Frame title={t("repeats")} body={x(unit.repeats)} />
      <Frame title={t("shifts")} body={x(unit.shifts)} />
      <Frame title={t("method")} body={x(unit.method)} />

      <section className="space-y-5">
        <h2 className="font-display text-2xl">{t("deepTeach")}</h2>
        {unit.sections.map((s, i) => (
          <div key={i} className="space-y-2">
            <h3 className="font-display text-lg">{x(s.heading)}</h3>
            <RichText text={x(s.body)} />
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">{t("traps")}</h2>
        <div className="grid gap-3">
          {unit.traps.map((trap, i) => (
            <Card key={i}>
              <CardContent className="space-y-3 pt-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brick">{t("trapLabel")}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{x(trap.wrong)}</p>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sage">{t("rightLabel")}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{x(trap.right)}</p>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-prussian">{t("howToFix")}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{x(trap.fix)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">{t("flash")}</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {unit.flash.map((card, i) => {
            const open = openFlash === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpenFlash(open ? null : i)}
                className={cn(
                  "rounded-xl border border-line bg-surface p-4 text-left transition-colors",
                  open && "border-prussian/40 bg-prussian/5",
                )}
              >
                <p className="font-display text-base">{x(card.term)}</p>
                {open ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{x(card.def)}</p>
                ) : (
                  <p className="mt-2 text-xs text-muted">{t("tapReveal")}</p>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
        {prev ? (
          <Button variant="ghost" asChild>
            <Link to="/learn/$paper/$unit" params={{ paper: prev.paper, unit: prev.id }}>
              <ChevronLeft />
              {t("prevLesson")}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button variant="outline" asChild>
            <Link to="/learn/$paper/$unit" params={{ paper: next.paper, unit: next.id }}>
              {t("nextLesson")}
              <ChevronRight />
            </Link>
          </Button>
        ) : null}
      </div>
    </article>
  );
}

function Frame({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-2">
      <h2 className="font-display text-xl">{title}</h2>
      <RichText text={body} />
    </section>
  );
}
