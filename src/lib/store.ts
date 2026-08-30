import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Attempt, Category, Lang, LessonMark, ReviewCard } from "./types";
import { cycleFromDate } from "./cycle";

type AnswerLog = {
  questionId: string;
  chosen: number;
  correct: boolean;
  at: number;
  source: "practice" | "mock" | "predicted" | "drill";
};

type KalashalaState = {
  lang: Lang;
  category: Category;
  seenCycle: string;
  lessons: Record<string, LessonMark>;
  logs: AnswerLog[];
  attempts: Attempt[];
  reviews: Record<string, ReviewCard>;
  lastStudy: string | null;
  streak: number;
  setLang: (lang: Lang) => void;
  setCategory: (c: Category) => void;
  ackCycle: (id: string) => void;
  markLesson: (unitId: string) => void;
  logAnswer: (entry: AnswerLog) => void;
  upsertAttempt: (attempt: Attempt) => void;
  scheduleReview: (questionId: string, correct: boolean) => void;
  touchStreak: () => void;
  resetAll: () => void;
};

const initial = {
  lang: "ml" as Lang,
  category: "UR" as Category,
  seenCycle: cycleFromDate(),
  lessons: {} as Record<string, LessonMark>,
  logs: [] as AnswerLog[],
  attempts: [] as Attempt[],
  reviews: {} as Record<string, ReviewCard>,
  lastStudy: null as string | null,
  streak: 0,
};

function todayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export const useKalashala = create<KalashalaState>()(
  persist(
    (set, get) => ({
      ...initial,
      setLang: (lang) => set({ lang }),
      setCategory: (category) => set({ category }),
      ackCycle: (id) => set({ seenCycle: id }),
      markLesson: (unitId) =>
        set({
          lessons: {
            ...get().lessons,
            [unitId]: { completed: true, lastRead: Date.now() },
          },
        }),
      logAnswer: (entry) =>
        set({
          logs: [...get().logs.filter((l) => l.questionId !== entry.questionId || l.source !== entry.source), entry].slice(
            -800,
          ),
        }),
      upsertAttempt: (attempt) => {
        const rest = get().attempts.filter((a) => a.id !== attempt.id);
        set({ attempts: [...rest, attempt].slice(-40) });
      },
      scheduleReview: (questionId, correct) => {
        const prev = get().reviews[questionId];
        const now = Date.now();
        const ease = Math.max(1.3, (prev?.ease ?? 2.5) + (correct ? 0.15 : -0.4));
        const reps = correct ? (prev?.reps ?? 0) + 1 : 0;
        const lapses = correct ? (prev?.lapses ?? 0) : (prev?.lapses ?? 0) + 1;
        let intervalDays = 1;
        if (correct) {
          if (reps <= 1) intervalDays = 1;
          else if (reps === 2) intervalDays = 3;
          else intervalDays = Math.round((prev?.intervalDays ?? 3) * ease);
        } else {
          intervalDays = 1;
        }
        const card: ReviewCard = {
          questionId,
          ease,
          intervalDays,
          dueAt: now + intervalDays * 86400000,
          reps,
          lapses,
        };
        set({ reviews: { ...get().reviews, [questionId]: card } });
      },
      touchStreak: () => {
        const today = todayKey();
        const last = get().lastStudy;
        if (last === today) return;
        const y = new Date();
        y.setDate(y.getDate() - 1);
        const yesterday = todayKey(y);
        const streak = last === yesterday ? get().streak + 1 : 1;
        set({ lastStudy: today, streak });
      },
      resetAll: () => set({ ...initial, lang: get().lang, category: get().category, seenCycle: cycleFromDate() }),
    }),
    { name: "kalashala-v1", skipHydration: true },
  ),
);
