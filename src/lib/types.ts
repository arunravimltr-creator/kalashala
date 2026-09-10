export type Lang = "en" | "ml";

export type Text = {
  en: string;
  ml: string;
};

export type PaperId = "p1" | "va";

export type Difficulty = "net" | "jrf";

export type Category = "UR" | "EWS" | "OBC" | "SC" | "ST";

export type LessonSection = {
  heading: Text;
  body: Text;
};

export type Trap = {
  wrong: Text;
  right: Text;
  fix: Text;
};

export type Flash = {
  term: Text;
  def: Text;
};

export type Unit = {
  id: string;
  paper: PaperId;
  no: number;
  title: Text;
  examNote: Text;
  jrfWhy: Text;
  howAsked: Text;
  repeats: Text;
  shifts: Text;
  method: Text;
  sections: LessonSection[];
  traps: Trap[];
  flash: Flash[];
};

export type Question = {
  id: string;
  paper: PaperId;
  unitId: string;
  difficulty: Difficulty;
  predicted?: boolean;
  q: Text;
  options: [Text, Text, Text, Text];
  answer: 0 | 1 | 2 | 3;
  explain: Text;
  trap: Text;
  fix: Text;
};

export type MockKind = "mini" | "paper" | "combined" | "predicted" | "packset";

export type MockDef = {
  id: string;
  kind: MockKind;
  paper?: PaperId;
  title: Text;
  blurb: Text;
  minutes: number;
  perUnit: number;
  seed: string;
};

export type AttemptAnswer = {
  questionId: string;
  chosen: number | null;
  marked: boolean;
};

export type Attempt = {
  id: string;
  mockId: string;
  startedAt: number;
  finishedAt: number | null;
  remainingSec: number;
  answers: AttemptAnswer[];
  questionIds: string[];
};

export type ReviewCard = {
  questionId: string;
  ease: number;
  intervalDays: number;
  dueAt: number;
  reps: number;
  lapses: number;
};

export type LessonMark = {
  completed: boolean;
  lastRead: number;
};
