import { L } from "./builder";
import type { MockDef } from "@/lib/types";

export const MOCKS: MockDef[] = [
  {
    id: "p1-a",
    kind: "paper",
    paper: "p1",
    title: L("Paper I · Mock A", "പേപ്പർ I · മോക്ക് A"),
    blurb: L(
      "50 questions, 5 from each unit — the real NTA shape. 60 minutes. Teaching after you submit.",
      "50 ചോദ്യം, ഓരോ യൂണിറ്റിൽ നിന്നും 5 — യഥാർഥ എൻടിഎ രൂപം. 60 മിനിറ്റ്. സമർപ്പിച്ച ശേഷം പഠിപ്പിക്കൽ.",
    ),
    minutes: 60,
    perUnit: 5,
    seed: "p1-a",
  },
  {
    id: "p1-b",
    kind: "paper",
    paper: "p1",
    title: L("Paper I · Mock B", "പേപ്പർ I · മോക്ക് B"),
    blurb: L(
      "Second 50. Different seed, so a new mix of the unit banks. Sit it only after you have taught Mock A’s wounds.",
      "രണ്ടാം 50. വേറെ സീഡ്, പുതിയ മിശ്രണം. മോക്ക് A-യുടെ മുറിവുകൾ പഠിപ്പിച്ച ശേഷം മാത്രം.",
    ),
    minutes: 60,
    perUnit: 5,
    seed: "p1-b",
  },
  {
    id: "va-a",
    kind: "paper",
    paper: "va",
    title: L("Visual Art · Mock A", "ദൃശ്യകല · മോക്ക് A"),
    blurb: L(
      "80 questions, 8 from each unit (official Paper II is 100 — this trains the same density). 96 minutes.",
      "80 ചോദ്യം, യൂണിറ്റിന് 8 (ഔദ്യോഗിക പേപ്പർ II 100 — ഇതേ സാന്ദ്രത). 96 മിനിറ്റ്.",
    ),
    minutes: 96,
    perUnit: 8,
    seed: "va-a",
  },
  {
    id: "va-b",
    kind: "paper",
    paper: "va",
    title: L("Visual Art · Mock B", "ദൃശ്യകല · മോക്ക് B"),
    blurb: L(
      "Same bank, new order — a timing rehearsal after you have read Mock A’s clinic.",
      "അതേ ബാങ്ക്, പുതിയ ക്രമം — മോക്ക് A ക്ലിനിക് വായിച്ച ശേഷമുള്ള ടൈമിംഗ് റിഹേഴ്സൽ.",
    ),
    minutes: 96,
    perUnit: 8,
    seed: "va-b",
  },
  {
    id: "combined",
    kind: "combined",
    title: L("JRF combined sitting", "ജെആർഎഫ് കൂട്ടിയിരുത്തൽ"),
    blurb: L(
      "130 questions: 50 Paper I + 80 Visual Art, 180 minutes. Closest hall simulation Kalashala can give from this bank.",
      "130 ചോദ്യം: 50 പേപ്പർ I + 80 ദൃശ്യകല, 180 മിനിറ്റ്. ഈ ബാങ്കിൽ നിന്ന് ഏറ്റവും അടുത്ത ഹാൾ സിമുലേഷൻ.",
    ),
    minutes: 180,
    perUnit: 0,
    seed: "combined-26h2",
  },
  {
    id: "predicted",
    kind: "predicted",
    title: L("Likely this cycle", "ഈ സൈക്കിളിൽ സാധ്യത"),
    blurb: L(
      "High-yield and current-cycle items only — NEP, treaties, digital HE, Kochi Biennale, folk-modern names. Study mode with instant teaching.",
      "ഹൈ-യീൽഡും ഈ സൈക്കിൾ ഇനങ്ങളും മാത്രം — NEP, ഉടമ്പടി, ഡിജിറ്റൽ HE, കൊച്ചി ബിനാലെ. ഇൻസ്റ്റന്റ് പഠിപ്പിക്കലോടെ.",
    ),
    minutes: 45,
    perUnit: 0,
    seed: "pred",
  },
];
