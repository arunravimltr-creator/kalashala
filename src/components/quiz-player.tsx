import { useNavigate } from "@tanstack/react-router";
import { Bookmark, Check, ChevronLeft, ChevronRight, Clock, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { TeachPanel } from "@/components/teach-panel";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { unitById } from "@/data/catalog";
import { useKalashala } from "@/lib/store";
import type { Attempt, Question } from "@/lib/types";
import { cn, formatTime } from "@/lib/utils";

const LETTERS = ["A", "B", "C", "D"] as const;

export function QuizPlayer({
  questions,
  mode,
  mockId,
  attemptId,
  minutes,
}: {
  questions: Question[];
  mode: "practice" | "mock";
  mockId?: string;
  attemptId?: string;
  minutes?: number;
}) {
  const { t, x } = useT();
  const navigate = useNavigate();
  const upsert = useKalashala((s) => s.upsertAttempt);
  const logAnswer = useKalashala((s) => s.logAnswer);
  const schedule = useKalashala((s) => s.scheduleReview);
  const touch = useKalashala((s) => s.touchStreak);
  const attempts = useKalashala((s) => s.attempts);

  const existing = attemptId ? attempts.find((a) => a.id === attemptId) : undefined;

  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<(number | null)[]>(
    () => existing?.answers.map((a) => a.chosen) ?? questions.map(() => null),
  );
  const [marked, setMarked] = useState<boolean[]>(
    () => existing?.answers.map((a) => a.marked) ?? questions.map(() => false),
  );
  const [revealed, setRevealed] = useState<boolean[]>(() => questions.map(() => false));
  const [remaining, setRemaining] = useState(
    existing?.remainingSec ?? (minutes ? minutes * 60 : 0),
  );
  const [confirm, setConfirm] = useState(false);

  const finishedRef = useRef(false);
  const chosenRef = useRef(chosen);
  const markedRef = useRef(marked);
  const remainingRef = useRef(remaining);
  chosenRef.current = chosen;
  markedRef.current = marked;
  remainingRef.current = remaining;

  const q = questions[index];
  const timed = mode === "mock" && Boolean(minutes);

  useEffect(() => {
    touch();
  }, [touch]);

  function persist(partial?: Partial<Attempt>) {
    if (mode !== "mock" || !attemptId || !mockId) return;
    const attempt: Attempt = {
      id: attemptId,
      mockId,
      startedAt: existing?.startedAt ?? Date.now(),
      finishedAt: null,
      remainingSec: remainingRef.current,
      questionIds: questions.map((item) => item.id),
      answers: questions.map((item, i) => ({
        questionId: item.id,
        chosen: chosenRef.current[i] ?? null,
        marked: markedRef.current[i] ?? false,
      })),
      ...partial,
    };
    upsert(attempt);
  }

  useEffect(() => {
    if (!timed) return;
    const id = window.setInterval(() => {
      setRemaining((s) => {
        const next = s <= 1 ? 0 : s - 1;
        remainingRef.current = next;
        return next;
      });
    }, 1000);
    const save = window.setInterval(() => persist(), 15000);
    return () => {
      window.clearInterval(id);
      window.clearInterval(save);
    };
    // persist is stable enough via refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timed, attemptId, mockId]);

  useEffect(() => {
    if (timed && remaining === 0 && minutes && !finishedRef.current) {
      finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, timed, minutes]);

  function pick(option: number) {
    setChosen((prev) => {
      const next = [...prev];
      next[index] = option;
      chosenRef.current = next;
      return next;
    });
  }

  function submitCurrent() {
    const current = questions[index];
    if (!current) return;
    const choice = chosenRef.current[index];
    if (choice === null || choice === undefined) return;
    const ok = choice === current.answer;
    logAnswer({
      questionId: current.id,
      chosen: choice,
      correct: ok,
      at: Date.now(),
      source: mode === "mock" ? "mock" : current.predicted ? "predicted" : "practice",
    });
    schedule(current.id, ok);
    setRevealed((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  function finish() {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const id = attemptId ?? `prac-${Date.now().toString(36)}`;
    const mock = mockId ?? "practice";
    questions.forEach((item, i) => {
      const choice = chosenRef.current[i];
      if (choice === null || choice === undefined) return;
      logAnswer({
        questionId: item.id,
        chosen: choice,
        correct: choice === item.answer,
        at: Date.now(),
        source: mode === "mock" ? "mock" : item.predicted ? "predicted" : "practice",
      });
      schedule(item.id, choice === item.answer);
    });
    upsert({
      id,
      mockId: mock,
      startedAt: existing?.startedAt ?? Date.now(),
      finishedAt: Date.now(),
      remainingSec: remainingRef.current,
      questionIds: questions.map((item) => item.id),
      answers: questions.map((item, i) => ({
        questionId: item.id,
        chosen: chosenRef.current[i] ?? null,
        marked: markedRef.current[i] ?? false,
      })),
    });
    void navigate({ to: "/results/$id", params: { id } });
  }

  const unit = q ? unitById(q.unitId) : undefined;
  const showTeach = mode === "practice" && revealed[index] && q;
  const choice = q ? chosen[index] : null;

  const palette = useMemo(
    () =>
      questions.map((_, i) => {
        if (chosen[i] === null) return marked[i] ? "mark" : "empty";
        if (mode === "practice" && revealed[i]) {
          return chosen[i] === questions[i]?.answer ? "ok" : "bad";
        }
        return marked[i] ? "mark" : "done";
      }),
    [questions, chosen, marked, revealed, mode],
  );

  if (!q) {
    return <p className="text-muted">{t("emptyPractice")}</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted">
          {t("qOf")} {index + 1} {t("of")} {questions.length}
          {unit ? ` · ${x(unit.title)}` : null}
        </p>
        {timed ? (
          <p className={cn("flex items-center gap-1.5 font-mono text-sm tabular-nums", remaining < 120 && "text-brick")}>
            <Clock className="size-4" />
            {t("timeLeft")} {formatTime(remaining)}
          </p>
        ) : null}
      </div>

      <div className={cn("flex flex-wrap gap-0.5", questions.length > 40 && "max-h-28 overflow-y-auto pr-1")}>
        {palette.map((tone, i) => (
          <button
            key={questions[i]?.id ?? i}
            type="button"
            onClick={() => {
              persist();
              setIndex(i);
            }}
            className={cn(
              "rounded-sm text-[0.65rem] font-medium tabular-nums",
              questions.length > 30 ? "size-7" : "size-8",
              tone === "empty" && "bg-chip text-muted",
              tone === "done" && "bg-prussian/15 text-prussian",
              tone === "mark" && "bg-amber/15 text-amber",
              tone === "ok" && "bg-sage/15 text-sage",
              tone === "bad" && "bg-brick/12 text-brick",
              i === index && "ring-2 ring-ink/30",
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 pt-5">
          <div className="flex flex-wrap gap-1.5">
            {q.predicted ? <Badge tone="amber">{t("predictedBadge")}</Badge> : null}
            {q.difficulty === "jrf" ? <Badge tone="prussian">{t("jrfLevel")}</Badge> : <Badge>{t("netLevel")}</Badge>}
          </div>
          <p className="font-display text-lg leading-snug text-ink">{x(q.q)}</p>
          <div className="grid gap-2">
            {q.options.map((opt, i) => {
              const selected = choice === i;
              const isCorrect = i === q.answer;
              const teach = Boolean(showTeach);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={teach}
                  onClick={() => pick(i)}
                  className={cn(
                    "flex min-h-12 items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm leading-relaxed transition-colors",
                    selected && !teach && "border-prussian bg-prussian/8",
                    !selected && !teach && "border-line bg-surface hover:bg-chip",
                    teach && isCorrect && "border-sage bg-sage/10",
                    teach && selected && !isCorrect && "border-brick bg-brick/8",
                    teach && !selected && !isCorrect && "border-line bg-surface opacity-70",
                  )}
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-chip font-mono text-xs">
                    {LETTERS[i]}
                  </span>
                  <span className="flex-1">{x(opt)}</span>
                  {teach && isCorrect ? <Check className="mt-0.5 size-4 text-sage" /> : null}
                  {teach && selected && !isCorrect ? <X className="mt-0.5 size-4 text-brick" /> : null}
                </button>
              );
            })}
          </div>

          {showTeach ? (
            <TeachPanel q={q} chosen={choice ?? null} showChoices={false} />
          ) : (
            <p className="text-xs text-subtle">{t("teachingAfter")}</p>
          )}

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => {
                persist();
                setIndex((i) => Math.max(0, i - 1));
              }}
              disabled={index === 0}
            >
              <ChevronLeft />
              {t("prev")}
            </Button>
            {mode === "practice" && !revealed[index] ? (
              <Button onClick={submitCurrent} disabled={choice === null}>
                {t("submit")}
              </Button>
            ) : null}
            <Button
              variant="ghost"
              onClick={() =>
                setMarked((prev) => {
                  const next = [...prev];
                  next[index] = !next[index];
                  markedRef.current = next;
                  return next;
                })
              }
            >
              <Bookmark className="size-4" />
              {marked[index] ? t("unmarked") : t("mark")}
            </Button>
            <div className="flex-1" />
            {index < questions.length - 1 ? (
              <Button
                variant={showTeach || mode === "mock" ? "default" : "outline"}
                onClick={() => {
                  persist();
                  setIndex((i) => Math.min(questions.length - 1, i + 1));
                }}
              >
                {t("next")}
                <ChevronRight />
              </Button>
            ) : (
              <Button onClick={() => (mode === "mock" ? setConfirm(true) : finish())}>
                {mode === "mock" ? t("submitMock") : t("finishSet")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {confirm ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="space-y-4 pt-6">
              <p className="font-display text-lg">{t("submitMock")}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{t("confirmSubmit")}</p>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setConfirm(false)}>
                  {t("cancel")}
                </Button>
                <Button
                  onClick={() => {
                    setConfirm(false);
                    finish();
                  }}
                >
                  {t("confirm")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      <p className="text-xs text-subtle">{t("autoSaved")}</p>
    </div>
  );
}
