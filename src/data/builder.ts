import type { Difficulty, PaperId, Question, Text } from "@/lib/types";

export function L(en: string, ml: string): Text {
  return { en, ml };
}

export function Q(args: {
  id: string;
  paper: PaperId;
  unitId: string;
  difficulty?: Difficulty;
  predicted?: boolean;
  q: Text;
  options: [Text, Text, Text, Text];
  answer: 0 | 1 | 2 | 3;
  explain: Text;
  trap: Text;
  fix: Text;
}): Question {
  return {
    difficulty: args.difficulty ?? "net",
    predicted: args.predicted ?? false,
    id: args.id,
    paper: args.paper,
    unitId: args.unitId,
    q: args.q,
    options: args.options,
    answer: args.answer,
    explain: args.explain,
    trap: args.trap,
    fix: args.fix,
  };
}
