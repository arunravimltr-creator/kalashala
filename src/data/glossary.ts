import { L } from "./builder";
import type { Text } from "@/lib/types";

export type Gloss = { term: Text; def: Text; paper: "p1" | "va" };

export const GLOSSARY: Gloss[] = [
  { paper: "p1", term: L("Aptitude", "അഭിരുചി"), def: L("Natural or trained readiness for a kind of work — teaching, research, numbers.", "ഒരു ജോലിക്കുള്ള സജ്ജത — അധ്യാപനം, ഗവേഷണം, എണ്ണം.") },
  { paper: "p1", term: L("Formative evaluation", "രൂപീകരണ മൂല്യനിർണയം"), def: L("Feedback during learning, to improve. Not the final certificate.", "പഠനത്തിനിടയിലെ ഫീഡ്ബാക്ക്. അന്തിമ സർട്ടിഫിക്കറ്റല്ല.") },
  { paper: "p1", term: L("Summative evaluation", "സമാപ്ത മൂല്യനിർണയം"), def: L("End-point judgement — grade, certify, select.", "അവസാന വിധി — ഗ്രേഡ്, സർട്ടിഫൈ.") },
  { paper: "p1", term: L("Andragogy", "ആൻഡ്രഗോജി"), def: L("Helping adults learn — self-directed, experience, problem-centred.", "മുതിർന്നവരെ പഠിപ്പിക്കൽ — സ്വയം നിയന്ത്രിതം.") },
  { paper: "p1", term: L("Null hypothesis", "ശൂന്യ പരികൽപന"), def: L("The ‘no difference / no relationship’ statement you test.", "വ്യത്യാസമില്ല എന്ന പ്രസ്താവന.") },
  { paper: "p1", term: L("Type I error", "ടൈപ്പ് I പിഴവ്"), def: L("Rejecting a true null — a false positive.", "ശരിയായ നൾ നിരസിക്കൽ.") },
  { paper: "p1", term: L("Vyapti / concomitance", "വ്യാപ്തി"), def: L("Invariable link between reason and conclusion (smoke–fire).", "ഹേതുവും സാധ്യവും തമ്മിലുള്ള അവിനാഭാവ ബന്ധം.") },
  { paper: "p1", term: L("Arthapatti", "അർഥാപത്തി"), def: L("Postulation to explain otherwise incompatible facts.", "പൊരുത്തപ്പെടാത്ത വസ്തുതകൾ വിശദീകരിക്കാനുള്ള കൽപ്പന.") },
  { paper: "p1", term: L("Anupalabdhi", "അനുപലബ്ധി"), def: L("Knowledge of absence — you know the pot is not there.", "അഭാവജ്ഞാനം.") },
  { paper: "p1", term: L("Kinesics", "കൈനസിക്സ്"), def: L("Body movement as communication. Proxemics = space. Haptics = touch.", "ശരീരചലനം. പ്രോക്സെമിക്സ് = ഇടം.") },
  { paper: "p1", term: L("Noise (communication)", "നോയ്സ്"), def: L("Anything that distorts the message — not only loud sound.", "സന്ദേശം വികലമാക്കുന്നതെന്തും.") },
  { paper: "p1", term: L("Volatile memory", "വോളറ്റൈൽ മെമ്മറി"), def: L("RAM: contents vanish when power goes.", "പവർ പോയാൽ RAM മായും.") },
  { paper: "p1", term: L("MOOC", "മൂക്ക്"), def: L("Massive Open Online Course — the family SWAYAM belongs to.", "SWAYAM ഉൾപ്പെടുന്ന വിഭാഗം.") },
  { paper: "p1", term: L("Shodhganga", "ശോധ്ഗംഗ"), def: L("INFLIBNET repository of Indian electronic theses.", "ഇന്ത്യൻ ഇ-തീസിസ് ശേഖരം.") },
  { paper: "p1", term: L("Academic Bank of Credits", "എബിസി"), def: L("NEP 2020 store-and-transfer of credits across institutions.", "NEP 2020 ക്രെഡിറ്റ് സംഭരണ–കൈമാറ്റം.") },
  { paper: "va", term: L("Sfumato", "സ്ഫുമാറ്റോ"), def: L("Smoky, imperceptible tone blend — Leonardo.", "പുകമറ പോലുള്ള സൂക്ഷ്മ സംക്രമണം — ലിയനാർഡോ.") },
  { paper: "va", term: L("Tenebrism", "ടെനിബ്രിസം"), def: L("Violent light–dark contrast — Caravaggio.", "തീവ്ര ഇരുട്ട്–വെളിച്ചം — കാരവാജിയോ.") },
  { paper: "va", term: L("Wasli", "വാസ്ലി"), def: L("Burnished layered paper support for miniature painting.", "മിനിയേച്ചറിനുള്ള മിനുക്കിയ പാളി കടലാസ്.") },
  { paper: "va", term: L("Fresco buono", "ഫ്രെസ്കോ ബുവോണോ"), def: L("Painting into wet lime plaster. Secco is on dry plaster.", "നനഞ്ഞ ചുണ്ണാമ്പ് പ്ലാസ്റ്ററിൽ. സെക്കോ ഉണങ്ങിയത്.") },
  { paper: "va", term: L("Intaglio", "ഇന്റാഗ്ലിയോ"), def: L("Ink sits in bitten or cut recesses — etching, engraving, drypoint.", "കൊത്തിയ താഴ്ചയിൽ മഷി — എച്ചിംഗ്, എൻഗ്രേവിംഗ്.") },
  { paper: "va", term: L("Cire perdue", "സിർ പെർദ്യൂ"), def: L("Lost-wax casting.", "മെഴുക് ഉരുക്കി വാർപ്പ്.") },
  { paper: "va", term: L("Shadanga", "ഷഡംഗം"), def: L("Six limbs of painting, in Yashodhara on the Kamasutra.", "ചിത്രത്തിന്റെ ആറ് അംഗം — കാമസൂത്ര വ്യാഖ്യാനം.") },
  { paper: "va", term: L("Significant form", "സിഗ്നിഫിക്കന്റ് ഫോം"), def: L("Clive Bell: the essential quality of a work of art.", "ക്ലൈവ് ബെൽ: കലാസൃഷ്ടിയുടെ സാരഗുണം.") },
  { paper: "va", term: L("Talamana", "താളമാനം"), def: L("Canon of proportionate measurement for images.", "ബിംബ അനുപാത സമ്പ്രദായം.") },
  { paper: "va", term: L("Provenance", "പ്രോവനൻസ്"), def: L("Ownership history of a work.", "ഉടമസ്ഥതാ ചരിത്രം.") },
  { paper: "va", term: L("Trompe l’oeil", "ട്രോംപ് ലോയ്"), def: L("Illusionistic painting that deceives the eye.", "കണ്ണിനെ വഞ്ചിക്കുന്ന മായാചിത്രം.") },
  { paper: "va", term: L("Aura (Benjamin)", "ഔറ"), def: L("Unique presence of the original, weakened by mechanical reproduction.", "യഥാർഥ കൃതിയുടെ സാന്നിധ്യം — യന്ത്രപകർപ്പിൽ ക്ഷയിക്കുന്നു.") },
  { paper: "va", term: L("Panchavarna", "പഞ്ചവർണം"), def: L("Five-colour scheme of Kerala murals.", "കേരള ചുവർചിത്രത്തിന്റെ അഞ്ച് നിറം.") },
];

export const FACT_SHEETS: { id: string; title: Text; rows: { k: Text; v: Text }[] }[] = [
  {
    id: "indian",
    title: L("Indian art chronology — lock these pairs", "ഇന്ത്യൻ കലാകാലക്രമം — ഈ ജോടികൾ പൂട്ടുക"),
    rows: [
      { k: L("Indus", "സിന്ധു"), v: L("Dancing Girl bronze; Priest-King steatite", "ഡാൻസിംഗ് ഗേൾ വെങ്കലം; പ്രീസ്റ്റ്-കിംഗ് സ്റ്റിയറ്റൈറ്റ്") },
      { k: L("Mauryan", "മൗര്യ"), v: L("Sarnath Lion Capital — Chunar sandstone, Mauryan polish", "സാരനാഥ് സിംഹസ്തംഭം — ചുനാർ മണൽക്കല്ല്") },
      { k: L("Kushana", "കുഷാണ"), v: L("Gandhara grey schist / Mathura mottled red sandstone", "ഗന്ധാര ഗ്രേ ഷിസ്റ്റ് / മഥുര ചുവന്ന മണൽക്കല്ല്") },
      { k: L("Ellora 16", "എല്ലോറ 16"), v: L("Kailasa — Rashtrakuta, monolithic", "കൈലാസ — രാഷ്ട്രകൂട, ഏകശില") },
      { k: L("Chola", "ചോള"), v: L("Nataraja bronzes; Brihadeeswara — Rajaraja I", "നടരാജ വെങ്കലം; ബൃഹദീശ്വര — രാജരാജ I") },
      { k: L("Khajuraho / Konark", "ഖജുരാഹോ / കോണാർക്ക്"), v: L("Chandelas / Narasimhadeva I", "ചന്ദേലന്മാർ / നരസിംഹദേവ I") },
      { k: L("PAG", "പിഎജി"), v: L("Bombay, 1947 — not Calcutta Group 1943", "ബോംബെ 1947 — കൽക്കട്ട ഗ്രൂപ്പ് 1943 അല്ല") },
    ],
  },
  {
    id: "western",
    title: L("Western dates that NTA actually recycles", "എൻടിഎ ആവർത്തിക്കുന്ന പാശ്ചാത്യ തീയതികൾ"),
    rows: [
      { k: L("Alberti / Brunelleschi", "ആൽബർട്ടി / ബ്രുനല്ലെസ്കി"), v: L("Della Pittura 1435 / Florence dome", "ഡെല്ല പിറ്റുര 1435 / ഫ്ലോറൻസ് ഗോപുരം") },
      { k: L("Demoiselles / Guernica", "ഡെമൊയ്സെൽ / ഗ്വെർനിക്ക"), v: L("1907 / 1937", "1907 / 1937") },
      { k: L("Dada / Fountain", "ഡാഡ / ഫൗണ്ടൻ"), v: L("Zurich 1916 / Duchamp 1917", "സൂറിച്ച് 1916 / ഡുഷാമ്പ് 1917") },
      { k: L("Bauhaus", "ബൗഹൗസ്"), v: L("Weimar 1919, Gropius", "വെയ്മർ 1919, ഗ്രോപിയസ്") },
      { k: L("Venice / Kochi", "വെനീസ് / കൊച്ചി"), v: L("1895 / 2012 first edition", "1895 / 2012 ആദ്യ പതിപ്പ്") },
      { k: L("Documenta", "ഡോക്യുമെന്റ"), v: L("Kassel — not Basel, not Venice", "കാസൽ — ബാസൽ/വെനീസ് അല്ല") },
    ],
  },
];
