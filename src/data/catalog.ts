import type { MockDef, PaperId, Question, Unit } from "@/lib/types";
import { useKalashala } from "@/lib/store";
import { pickN } from "@/lib/utils";
import { MOCKS, PACK_MOCKS } from "./mocks";
import { LATEST_PACK } from "./pack-meta";
import { QUESTIONS_P1 } from "./q-p1";
import { QUESTIONS_PACK } from "./q-pack";
import { QUESTIONS_VA } from "./q-va";
import { UNITS_P1 } from "./units-p1";
import { UNITS_VA } from "./units-va";

export const ALL_UNITS: Unit[] = [...UNITS_P1, ...UNITS_VA];
export const CORE_QUESTIONS: Question[] = [...QUESTIONS_P1, ...QUESTIONS_VA];
export { MOCKS, PACK_MOCKS, UNITS_P1, UNITS_VA };

export function packIsInstalled(): boolean {
  return useKalashala.getState().installedPack === LATEST_PACK.id;
}

export function allQuestions(): Question[] {
  if (packIsInstalled()) return [...CORE_QUESTIONS, ...QUESTIONS_PACK];
  return CORE_QUESTIONS;
}

/** @deprecated use allQuestions() — kept so older imports keep compiling during the pack wire-up. */
export const ALL_QUESTIONS: Question[] = CORE_QUESTIONS;

export function allMocks(): MockDef[] {
  if (packIsInstalled()) return [...MOCKS, ...PACK_MOCKS];
  return MOCKS;
}

export function unitById(id: string): Unit | undefined {
  return ALL_UNITS.find((u) => u.id === id);
}

export function unitsFor(paper: PaperId): Unit[] {
  return paper === "p1" ? UNITS_P1 : UNITS_VA;
}

export function questionsForUnit(unitId: string): Question[] {
  return allQuestions().filter((q) => q.unitId === unitId);
}

export function questionById(id: string): Question | undefined {
  return allQuestions().find((q) => q.id === id);
}

export function predictedQuestions(): Question[] {
  return allQuestions().filter((q) => q.predicted);
}

export function mockById(id: string): MockDef | undefined {
  return allMocks().find((m) => m.id === id);
}

export function questionsForMock(mock: MockDef): Question[] {
  if (mock.kind === "predicted") return predictedQuestions();
  if (mock.kind === "packset") {
    return allQuestions().filter((q) => q.id.startsWith(`${mock.seed}-`));
  }
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
