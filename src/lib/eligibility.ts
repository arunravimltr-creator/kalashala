import type { Category } from "./types";

export type JrfFlags = {
  woman: boolean;
  pwd: boolean;
  thirdGender: boolean;
};

/** JRF age is counted on the first day of the month in which the exam concludes. */
export function ageOn(birthIso: string, asOf: Date): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(birthIso.trim());
  if (!m) return null;
  const by = Number(m[1]);
  const bm = Number(m[2]);
  const bd = Number(m[3]);
  if (bm < 1 || bm > 12 || bd < 1 || bd > 31) return null;
  const born = Date.UTC(by, bm - 1, bd);
  if (Number.isNaN(born)) return null;
  let age = asOf.getUTCFullYear() - by;
  const monthNow = asOf.getUTCMonth() + 1;
  const dayNow = asOf.getUTCDate();
  if (monthNow < bm || (monthNow === bm && dayNow < bd)) age -= 1;
  return age < 0 || age > 120 ? null : age;
}

export function jrfCeiling(category: Category, flags: JrfFlags): number {
  if (flags.woman || flags.pwd || flags.thirdGender) return 35;
  if (category === "OBC" || category === "SC" || category === "ST") return 35;
  return 30;
}

export function jrfEligible(age: number, category: Category, flags: JrfFlags): boolean {
  return age <= jrfCeiling(category, flags);
}

/** December 2026 cycle — first day of the exam-conclusion month, pending official dates. */
export const DEC_2026_RECKON = new Date(Date.UTC(2026, 11, 1));
