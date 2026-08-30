import { L } from "@/data/builder";
import type { Category, Text } from "./types";

export type CycleId = `${number}-H1` | `${number}-H2`;

export function cycleFromDate(d = new Date()): CycleId {
  const y = d.getFullYear();
  const m = d.getMonth();
  return m < 6 ? `${y}-H1` : `${y}-H2`;
}

export function cycleLabel(id: CycleId, lang: "en" | "ml"): string {
  const [year, half] = id.split("-") as [string, "H1" | "H2"];
  if (lang === "ml") {
    return half === "H1" ? `${year} ജൂൺ സൈക്കിൾ` : `${year} ഡിസംബർ സൈക്കിൾ`;
  }
  return half === "H1" ? `June ${year} cycle` : `December ${year} cycle`;
}

export function nextCycleDate(id: CycleId): Date {
  const year = Number(id.slice(0, 4));
  const half = id.slice(5);
  if (half === "H1") return new Date(Date.UTC(year, 6, 1));
  return new Date(Date.UTC(year + 1, 0, 1));
}

export const PUBLISHED_CYCLE: CycleId = "2026-H2";

export const CONTENT_VERSION = {
  id: PUBLISHED_CYCLE,
  publishedAt: "2026-08-01",
  cadence: "6 months",
};

export const CUTOFFS = {
  june2025: {
    label: L("June 2025 — Visual Art (79)", "ജൂൺ 2025 — ദൃശ്യകല (79)"),
    jrf: { UR: 194, EWS: 180, OBC: 176, SC: 162, ST: 156 },
    net: { UR: 168, EWS: 154, OBC: 150, SC: 140, ST: 134 },
  },
  dec2025: {
    label: L("December 2025 — Visual Art (79)", "ഡിസംബർ 2025 — ദൃശ്യകല (79)"),
    jrf: { UR: 216, EWS: 200, OBC: 196, SC: 176, ST: 168 },
    net: { UR: 186, EWS: 172, OBC: 168, SC: 154, ST: 146 },
  },
} as const;

export const JRF_TARGET: Record<Category, number> = {
  UR: 220,
  EWS: 205,
  OBC: 200,
  SC: 185,
  ST: 175,
};

export const QUALIFYING_PCT: Record<Category, number> = {
  UR: 40,
  EWS: 35,
  OBC: 35,
  SC: 35,
  ST: 35,
};

export function bandForScore(score: number, category: Category): "jrf" | "net" | "below" {
  const jrf = CUTOFFS.dec2025.jrf[category];
  const net = CUTOFFS.dec2025.net[category];
  if (score >= jrf) return "jrf";
  if (score >= net) return "net";
  return "below";
}

export type CycleNote = {
  id: string;
  cycle: CycleId;
  area: Text;
  body: Text;
};

export const CYCLE_NOTES: CycleNote[] = [
  {
    id: "nep-abc",
    cycle: "2026-H2",
    area: L("Higher Education / Paper I Unit X", "ഉന്നതവിദ്യാഭ്യാസം / പേപ്പർ I യൂണിറ്റ് X"),
    body: L(
      "NEP 2020 implementation questions now assume Academic Bank of Credits, multiple entry–exit, NCrF, and the four proposed HECI verticals (NHERC, NAC, HEGC, GEC). Memorise the 5+3+3+4 school structure and GER 50% by 2035.",
      "NEP 2020 ചോദ്യങ്ങൾ ഇപ്പോൾ ABC, മൾട്ടിപ്പിൾ എൻട്രി–എക്സിറ്റ്, NCrF, HECI-യുടെ നാല് വെർട്ടിക്കലുകൾ (NHERC, NAC, HEGC, GEC) എന്നിവ അനുമാനിക്കുന്നു. 5+3+3+4 ഘടനയും 2035-ഓടെ 50% GER-ഉം മനഃപാഠമാക്കുക.",
    ),
  },
  {
    id: "digital-he",
    cycle: "2026-H2",
    area: L("ICT / Paper I Unit VIII", "ഐസിടി / പേപ്പർ I യൂണിറ്റ് VIII"),
    body: L(
      "Keep SWAYAM, SWAYAM Prabha, NPTEL, NDLI, e-PG Pathshala, NAD/DigiLocker, APAAR, and Anuvadini/Bhashini in active recall. Match the portal to the ministry (Education / MeitY) rather than guessing the year alone.",
      "SWAYAM, SWAYAM Prabha, NPTEL, NDLI, e-PG Pathshala, NAD/DigiLocker, APAAR, Anuvadini/Bhashini എന്നിവ ആക്ടീവ് റിക്കോളിൽ വയ്ക്കുക. വർഷം മാത്രം ഊഹിക്കാതെ പോർട്ടൽ ഏത് മന്ത്രാലയത്തിന്റേതാണെന്ന് യോജിപ്പിക്കുക.",
    ),
  },
  {
    id: "climate",
    cycle: "2026-H2",
    area: L("Environment / Paper I Unit IX", "പരിസ്ഥിതി / പേപ്പർ I യൂണിറ്റ് IX"),
    body: L(
      "Paris Agreement (2015), ISA (2015, HQ: Gurugram), Kunming–Montreal Global Biodiversity Framework, and India’s updated NDCs remain high-yield. Do not confuse Montreal Protocol (ozone, 1987) with Paris (climate, 2015).",
      "പാരീസ് ഉടമ്പടി (2015), ISA (2015, ആസ്ഥാനം ഗുഡ്ഗാവ്), കുൻമിങ്–മോൺട്രിയൽ ജൈവവൈവിധ്യ ചട്ടക്കൂട്, ഇന്ത്യയുടെ പുതുക്കിയ NDC എന്നിവ ഹൈ-യീൽഡ്. മോൺട്രിയൽ പ്രോട്ടോക്കോൾ (ഓസോൺ, 1987) പാരീസുമായി (കാലാവസ്ഥ, 2015) കൂട്ടിക്കലർത്തരുത്.",
    ),
  },
  {
    id: "contemporary-art",
    cycle: "2026-H2",
    area: L("Visual Art Units VIII & X", "ദൃശ്യകല യൂണിറ്റ് VIII, X"),
    body: L(
      "Expect installation, new-media, biennale culture (Kochi-Muziris), curatorial practice, and folk/tribal contemporary transformations (Gond, Warli, Madhubani, Patachitra) alongside the older PAG / Bengal School bank.",
      "പഴയ PAG / ബംഗാൾ സ്കൂൾ ബാങ്കിനൊപ്പം ഇൻസ്റ്റലേഷൻ, ന്യൂ-മീഡിയ, ബിനാലെ സംസ്കാരം (കൊച്ചി-മുസിരിസ്), ക്യുറേറ്റോറിയൽ പ്രാക്ടീസ്, നാടൻ/ആദിവാസി സമകാലിക രൂപാന്തരങ്ങൾ (ഗോണ്ട്, വാർലി, മധുബനി, പടചിത്ര) എന്നിവ പ്രതീക്ഷിക്കുക.",
    ),
  },
  {
    id: "h1-2027",
    cycle: "2027-H1",
    area: L("June 2027 window — prepared pack", "ജൂൺ 2027 വിൻഡോ — തയ്യാറാക്കിയ പായ്ക്ക്"),
    body: L(
      "When this cycle opens, re-drill digital-higher-education names, any new UGC regulations, and the latest Kochi Biennale / IGBK / NHRC-adjacent culture policy notes. Paper I current-affairs units turn over fastest.",
      "ഈ സൈക്കിൾ തുറക്കുമ്പോൾ ഡിജിറ്റൽ-ഉന്നതവിദ്യാഭ്യാസ പേരുകൾ, പുതിയ യുജിസി റെഗുലേഷനുകൾ, ഏറ്റവും പുതിയ കൊച്ചി ബിനാലെ / സാംസ്കാരിക നയക്കുറിപ്പുകൾ വീണ്ടും ഡ്രിൽ ചെയ്യുക. പേപ്പർ I കറന്റ്-അഫയേഴ്സ് യൂണിറ്റുകളാണ് ഏറ്റവും വേഗം മാറുന്നത്.",
    ),
  },
];

export function notesFor(cycle: CycleId): CycleNote[] {
  const exact = CYCLE_NOTES.filter((n) => n.cycle === cycle);
  if (exact.length) return exact;
  return CYCLE_NOTES.filter((n) => n.cycle === PUBLISHED_CYCLE);
}
