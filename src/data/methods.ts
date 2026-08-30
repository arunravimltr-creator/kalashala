import { L } from "./builder";
import type { Text } from "@/lib/types";

export type MethodBlock = {
  id: string;
  title: Text;
  body: Text;
};

export const METHODS: MethodBlock[] = [
  {
    id: "jrf-not-extra",
    title: L("JRF is not extra syllabus", "ജെആർഎഫ് അധിക സിലബസല്ല"),
    body: L(
      "Assistant Professor NET asks whether you know the map. JRF asks whether the map is automatic. Same ten Paper I units, same ten Visual Art units. The difference is error rate, date precision, and refusing the attractive wrong option.\n\nDecember 2025 Visual Art UR JRF sat at **216/300**. June 2025 sat at **194**. The line moves with the paper’s difficulty and the cohort. Kalashala therefore targets **220+** for UR, not the 40% qualifying floor (120/300). 40% is the door. JRF is the top of the room.",
      "അസിസ്റ്റന്റ് പ്രൊഫസർ നെറ്റ് ഭൂപടം അറിയുമോ എന്ന് ചോദിക്കുന്നു. ജെആർഎഫ് ഭൂപടം യാന്ത്രികമാണോ എന്ന് ചോദിക്കുന്നു. അതേ പത്ത് പേപ്പർ I യൂണിറ്റ്, അതേ പത്ത് ദൃശ്യകല യൂണിറ്റ്. വ്യത്യാസം തെറ്റ് നിരക്ക്, തീയതി കൃത്യത, ആകർഷകമായ തെറ്റ് ഓപ്ഷൻ നിരസിക്കൽ.\n\nഡിസംബർ 2025 ദൃശ്യകല UR ജെആർഎഫ് **216/300**. ജൂൺ 2025 **194**. ലൈൻ പേപ്പറിനും കൂട്ടത്തിനും അനുസരിച്ച് നീങ്ങും. അതിനാൽ കലാശാല UR-ന് **220+** ലക്ഷ്യമിടുന്നു — 40% (120) യോഗ്യതാ തറയല്ല. 40% വാതിൽ. ജെആർഎഫ് മുറിയുടെ മുകൾ.",
    ),
  },
  {
    id: "cycle",
    title: L("A six-month cycle, not a year of panic", "ഒരു വർഷത്തെ പരിഭ്രാന്തിയല്ല, ആറുമാസ ചക്രം"),
    body: L(
      "**Weeks 1–8 — grammar.** Paper I units 1, 2, 6, 8, 9, 10 and Visual Art 1, 3, 5, 7. Build tables, not essays. One unit a day, then a 10-question drill the next morning.\n\n**Weeks 9–16 — chronology and names.** Visual Art 6, 8, 9, 10 and the rest of Paper I. Matching lists every evening.\n\n**Weeks 17–22 — mocks and error logs.** Two Paper I, two Visual Art, one combined. Every wrong item is rewritten as a one-line rule in your own words.\n\n**Weeks 23–26 — predicted pack and weak-unit surgery.** Do not start new books. Cut the units that leak marks.",
      "**ആഴ്ച 1–8 — വ്യാകരണം.** പേപ്പർ I 1, 2, 6, 8, 9, 10; ദൃശ്യകല 1, 3, 5, 7. ഉപന്യാസമല്ല, ടേബിൾ. ഒരു ദിവസം ഒരു യൂണിറ്റ്, അടുത്ത ദിവസം 10 ചോദ്യം.\n\n**ആഴ്ച 9–16 — കാലക്രമവും പേരുകളും.** ദൃശ്യകല 6, 8, 9, 10. വൈകുന്നേരം മാച്ചിംഗ്.\n\n**ആഴ്ച 17–22 — മോക്കും എറർ ലോഗും.** രണ്ട് പേപ്പർ I, രണ്ട് ദൃശ്യകല, ഒരു കമ്പൈൻഡ്. തെറ്റിയ ഓരോന്നും ഒരു വരി നിയമമായി വീണ്ടും എഴുതുക.\n\n**ആഴ്ച 23–26 — പ്രെഡിക്ടഡ് പായ്ക്കും ദുർബല യൂണിറ്റ് ശസ്ത്രക്രിയയും.** പുതിയ പുസ്തകം തുടങ്ങരുത്.",
    ),
  },
  {
    id: "repetition",
    title: L("How repetition actually works here", "ആവർത്തനം ഇവിടെ എങ്ങനെ ജോലി ചെയ്യുന്നു"),
    body: L(
      "NTA repeats **frames**, not sentences. ‘Match the following’ with Hunt/Morrison/Herbart will return; the distractors will change. Paris 2015 will return; a new biodiversity COP may sit beside it.\n\nKalashala’s spaced reviews are built for that. A wrong answer comes back tomorrow. A right one waits three days, then a week. Do not binge a unit ten times on Sunday and vanish until the mock. **Retrieve** it cold.\n\nThe Mistake clinic is the second repetition engine: it only shows what you actually missed, with the trap and the fix. Read those three blocks before you re-drill.",
      "എൻടിഎ **വാക്യമല്ല, ഫ്രെയിം** ആവർത്തിക്കുന്നു. ഹണ്ട്/മോറിസൺ/ഹെർബാർട്ട് മാച്ചിംഗ് തിരികെ വരും; ഡിസ്ട്രാക്ടർ മാറും. പാരീസ് 2015 തിരികെ വരും; പുതിയ ജൈവവൈവിധ്യ COP അരികിൽ നിൽക്കാം.\n\nകലാശാലയുടെ സ്പേസ്ഡ് റിവ്യൂ അതിനാണ്. തെറ്റ് നാളെ തിരികെ. ശരി മൂന്ന് ദിവസം, പിന്നെ ഒരാഴ്ച. ഞായറാഴ്ച പത്ത് വട്ടം വായിച്ച് മോക്ക് വരെ മറയരുത്. **തണുത്ത് ഓർത്തെടുക്കുക.**\n\nതെറ്റ് ക്ലിനിക് രണ്ടാം എഞ്ചിൻ: നിങ്ങൾ തെറ്റിയത് മാത്രം, കെണിയും പരിഹാരവും. വീണ്ടും ഡ്രില്ലിന് മുമ്പ് ആ മൂന്ന് ബ്ലോക്ക് വായിക്കുക.",
    ),
  },
  {
    id: "two-papers",
    title: L("How the two papers steal from each other", "രണ്ട് പേപ്പറും പരസ്പരം മോഷ്ടിക്കുന്നത്"),
    body: L(
      "Paper I comprehension will happily use an Ajanta passage — and punish you for using Paper II knowledge. Paper II aesthetics will use pramana vocabulary you trained in Paper I logic. ICT digital HE names sit next to art-education history (NID, colonial schools).\n\nStudy them as **one desk**. When a Visual Art lesson mentions Nalanda, flick to Paper I Unit X. When Paper I mentions evaluation, remember CBCS is also how art colleges now talk.",
      "പേപ്പർ I ഗ്രഹണം അജന്ത പാസേജ് ഇടും — പേപ്പർ II അറിവ് ഉപയോഗിച്ചാൽ ശിക്ഷിക്കും. പേപ്പർ II സൗന്ദര്യശാസ്ത്രം പേപ്പർ I യുക്തിയിലെ പ്രമാണ പദാവലി ഉപയോഗിക്കും. ഐസിടി ഡിജിറ്റൽ HE പേരുകൾ ആർട്ട് എഡ്യൂക്കേഷൻ ചരിത്രത്തിന് അരികിൽ (NID, കൊളോണിയൽ സ്കൂൾ).\n\n**ഒരു ഡെസ്ക്** ആയി പഠിക്കുക. ദൃശ്യകല നാലന്ത പറഞ്ഞാൽ പേപ്പർ I യൂണിറ്റ് X തുറക്കുക.",
    ),
  },
  {
    id: "p1-method",
    title: L("Paper I method — labels, not essays", "പേപ്പർ I മെത്തേഡ് — ഉപന്യാസമല്ല, ലേബൽ"),
    body: L(
      "Five questions a unit, two marks each, no negative marking. Attempt all.\n\n**Scoring units if you are an art student:** Teaching Aptitude, Research, Communication, ICT, Higher Education, Environment treaties. These are lists. Write the list from memory before you reread the lesson.\n\n**Math and DI:** never skip. A 40% arts identity is an expensive story. Two minutes of differences in a series is cheaper than leaving 10 marks.\n\n**Comprehension:** questions first, passage second, no studio knowledge.\n\n**Logic:** draw the square of opposition until A↔O is a reflex. Six pramanas with one example each.",
      "ഓരോ യൂണിറ്റിലും 5 ചോദ്യം, 2 മാർക്ക്, നെഗറ്റീവ് ഇല്ല. എല്ലാം എഴുതുക.\n\n**കലാ വിദ്യാർത്ഥിക്ക് സ്കോർ യൂണിറ്റുകൾ:** അധ്യാപനം, ഗവേഷണം, കമ്യൂണിക്കേഷൻ, ഐസിടി, ഉന്നതവിദ്യാഭ്യാസം, പരിസ്ഥിതി ഉടമ്പടികൾ. ഇവ ലിസ്റ്റുകളാണ്. പാഠം വീണ്ടും വായിക്കുന്നതിന് മുമ്പ് ലിസ്റ്റ് മനഃപാഠത്തിൽ നിന്ന് എഴുതുക.\n\n**ഗണിതവും DI-യും** ഒഴിവാക്കരുത്. സീരീസ് വ്യത്യാസം രണ്ട് മിനിറ്റ്, 10 മാർക്ക് വിടുന്നതിലും വിലകുറവ്.\n\n**ഗ്രഹണം:** ചോദ്യം ആദ്യം. **യുക്തി:** സ്ക്വയർ വരയ്ക്കുക. ആറ് പ്രമാണം, ഓരോ ഉദാഹരണം.",
    ),
  },
  {
    id: "va-method",
    title: L("Visual Art method — four timelines and one trap list", "ദൃശ്യകല മെത്തേഡ് — നാല് ടൈംലൈനും ഒരു കെണി ലിസ്റ്റും"),
    body: L(
      "Paper II is 100 questions, 200 marks. Kalashala’s sectional mock uses 8 per unit (80) so every official slot is trained; sit it timed, then drill the 20-question gap from your weakest units.\n\n**Four timelines on one sheet:** Western movements, Indian sculpture/architecture, Indian painting, modern Indian groups.\n\n**Technique family tree:** relief / intaglio / planographic / stencil; carving / modelling / casting.\n\n**Aesthetics flash:** Bharata 8 / Abhinava 9; dhvani; significant form; Panofsky 1-2-3.\n\n**Never mix:** Mathura–Gandhara, PAG–Calcutta Group, Montreal–Paris, NAAC–NIRF, vector–raster, wasli–palm leaf. Those pairs are where JRF is won.",
      "പേപ്പർ II 100 ചോദ്യം, 200 മാർക്ക്. കലാശാലയുടെ സെക്ഷണൽ മോക്ക് യൂണിറ്റിന് 8 (80) — ഔദ്യോഗിക സ്ലോട്ട് പരിശീലിക്കാൻ; ടൈംഡ് എഴുതി, ദുർബല യൂണിറ്റിൽ നിന്ന് 20 ചോദ്യത്തിന്റെ വിടവ് ഡ്രിൽ ചെയ്യുക.\n\n**ഒരു ഷീറ്റിൽ നാല് ടൈംലൈൻ:** പാശ്ചാത്യ പ്രസ്ഥാനങ്ങൾ, ഇന്ത്യൻ ശില്പം/വാസ്തു, ഇന്ത്യൻ ചിത്രം, ആധുനിക ഇന്ത്യൻ ഗ്രൂപ്പുകൾ.\n\n**സാങ്കേതിക കുടുംബവൃക്ഷം. സൗന്ദര്യശാസ്ത്ര ഫ്ലാഷ്.**\n\n**ഒരിക്കലും കൂട്ടിക്കലർത്തരുത്:** മഥുര–ഗന്ധാര, PAG–കൽക്കട്ട ഗ്രൂപ്പ്, മോൺട്രിയൽ–പാരീസ്, NAAC–NIRF, വെക്ടർ–റാസ്റ്റർ, വാസ്ലി–താളിയോല. ജെആർഎഫ് ഈ ജോടികളിൽ.",
    ),
  },
  {
    id: "mock-day",
    title: L("How to sit a mock, and how to read the result", "മോക്ക് എങ്ങനെ എഴുതണം, ഫലം എങ്ങനെ വായിക്കണം"),
    body: L(
      "Use the on-screen timer. Attempt every question — 2 marks, no negative. Mark doubtful items and return.\n\nAfter submit, **do not look at the score first**. Open every wrong card and read: correct option, why, the trap, the fix. Write the fix in one sentence. Then look at the band (JRF / NET / below) against December 2025 Visual Art cut-offs, scaled to the mock’s mark total.\n\nIf a unit is below 50%, return to the lesson before another mock. Another mock without teaching is just a new wound.",
      "ടൈമർ ഉപയോഗിക്കുക. എല്ലാം എഴുതുക — 2 മാർക്ക്, നെഗറ്റീവ് ഇല്ല. സംശയമുള്ളത് മാർക്ക് ചെയ്ത് തിരികെ.\n\nസമർപ്പിച്ച ശേഷം **സ്കോർ ആദ്യം നോക്കരുത്**. തെറ്റിയ ഓരോ കാർഡും: ശരി ഓപ്ഷൻ, കാരണം, കെണി, പരിഹാരം. പരിഹാരം ഒരു വാചകമായി എഴുതുക. പിന്നെ ഡിസംബർ 2025 ക്യൂട്ട്-ഓഫിനെതിരെ ബാൻഡ് (ജെആർഎഫ് / നെറ്റ് / താഴെ).\n\nയൂണിറ്റ് 50%-ൽ താഴെയെങ്കിൽ അടുത്ത മോക്കിന് മുമ്പ് പാഠത്തിലേക്ക് മടങ്ങുക. പഠിപ്പിക്കലില്ലാത്ത മോക്ക് പുതിയ മുറിവ് മാത്രം.",
    ),
  },
  {
    id: "malayalam",
    title: L("English paper, Malayalam brain", "ഇംഗ്ലീഷ് പേപ്പർ, മലയാളം മസ്തിഷ്കം"),
    body: L(
      "The NTA paper is English or Hindi. Kalashala teaches in Malayalam so the concept lands, then asks you to recognise the English label — SWAYAM, wasli, rasasutra, significant form — because that is what the option text will say.\n\nToggle language on a lesson: read Malayalam first, then English once. On mocks, stay in the language you will use in the hall if you can read it at speed. If English stems still snag you, drill the flash cards in English only for a week.",
      "എൻടിഎ പേപ്പർ ഇംഗ്ലീഷ് അല്ലെങ്കിൽ ഹിന്ദി. കലാശാല മലയാളത്തിൽ പഠിപ്പിക്കുന്നത് ആശയം ഇറങ്ങാൻ; പിന്നെ ഇംഗ്ലീഷ് ലേബൽ തിരിച്ചറിയാൻ — SWAYAM, wasli, rasasutra, significant form — ഓപ്ഷൻ ടെക്സ്റ്റ് അതാണ്.\n\nപാഠത്തിൽ ഭാഷ ടോഗിൾ ചെയ്യുക: മലയാളം ആദ്യം, പിന്നെ ഇംഗ്ലീഷ് ഒരിക്കൽ. മോക്കിൽ ഹാളിൽ ഉപയോഗിക്കുന്ന ഭാഷ. ഇംഗ്ലീഷ് സ്റ്റെം കുരുങ്ങിയാൽ ഒരാഴ്ച ഫ്ലാഷ് കാർഡ് ഇംഗ്ലീഷിൽ മാത്രം.",
    ),
  },
];
