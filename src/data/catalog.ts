import type { MockDef, PaperId, Question, Unit } from "@/lib/types";
import { pickN } from "@/lib/utils";
import { MOCKS } from "./mocks";
import { QUESTIONS_P1 } from "./q-p1";
import { QUESTIONS_VA } from "./q-va";
import { UNITS_P1 } from "./units-p1";
import { UNITS_VA } from "./units-va";

export const ALL_UNITS: Unit[] = [...UNITS_P1, ...UNITS_VA];
export const ALL_QUESTIONS: Question[] = [...QUESTIONS_P1, ...QUESTIONS_VA];
export { MOCKS, UNITS_P1, UNITS_VA };

export function unitById(id: string): Unit | undefined {
  return ALL_UNITS.find((u) => u.id === id);
}

export function unitsFor(paper: PaperId): Unit[] {
  return paper === "p1" ? UNITS_P1 : UNITS_VA;
}

export function questionsForUnit(unitId: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.unitId === unitId);
}

export function questionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function predictedQuestions(): Question[] {
  return ALL_QUESTIONS.filter((q) => q.predicted);
}

export function mockById(id: string): MockDef | undefined {
  return MOCKS.find((m) => m.id === id);
}

export function questionsForMock(mock: MockDef): Question[] {
  if (mock.kind === "predicted") return predictedQuestions();
  if (mock.kind === "combined") {
    const p1 = UNITS_P1.flatMap((u) => pickN(questionsForUnit(u.id), 5, `${mock.seed}:${u.id}`));
    const va = UNITS_VA.flatMap((u) => pickN(questionsForUnit(u.id), 8, `${mock.seed}:${u.id}`));
    return [...p1, ...va];
  }
  const units = mock.paper ? unitsFor(mock.paper) : ALL_UNITS;
  return units.flatMap((u) => pickN(questionsForUnit(u.id), mock.perUnit, `${mock.seed}:${u.id}`));
}

export function paperLabel(paper: PaperId): { en: string; ml: string } {
  return paper === "p1"
    ? { en: "Paper I", ml: "പേപ്പർ I" }
    : { en: "Visual Art (79)", ml: "ദൃശ്യകല (79)" };
}
