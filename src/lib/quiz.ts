import { CUTOFFS, JRF_TARGET, bandForScore } from "./cycle";
import type { Attempt, Category, Question } from "./types";

export function makeAttempt(mockId: string, questions: Question[], minutes: number): Attempt {
  return {
    id: `${mockId}-${Date.now().toString(36)}`,
    mockId,
    startedAt: Date.now(),
    finishedAt: null,
    remainingSec: Math.max(0, minutes) * 60,
    questionIds: questions.map((q) => q.id),
    answers: questions.map((q) => ({ questionId: q.id, chosen: null, marked: false })),
  };
}

export function scoreAttempt(attempt: Attempt, questions: Question[]) {
  const byId = new Map(questions.map((q) => [q.id, q]));
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  const unitTally: Record<string, { correct: number; total: number }> = {};
  const wrongIds: string[] = [];

  for (const a of attempt.answers) {
    const q = byId.get(a.questionId);
    if (!q) continue;
    const slot = (unitTally[q.unitId] ??= { correct: 0, total: 0 });
    slot.total += 1;
    if (a.chosen === null) {
      blank += 1;
    } else if (a.chosen === q.answer) {
      correct += 1;
      slot.correct += 1;
    } else {
      wrong += 1;
      wrongIds.push(q.id);
    }
  }

  const marks = correct * 2;
  const max = questions.length * 2;
  return { correct, wrong, blank, marks, max, unitTally, wrongIds };
}

export function scaledBand(marks: number, max: number, category: Category) {
  const scaled = max === 0 ? 0 : Math.round((marks / max) * 300);
  return {
    scaled,
    target: JRF_TARGET[category],
    band: bandForScore(scaled, category),
    jrfLine: CUTOFFS.dec2025.jrf[category],
    netLine: CUTOFFS.dec2025.net[category],
  };
}

export function accuracy(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}
