import type { Unit } from "@/lib/types";
import { L } from "./builder";

export const UNITS_P1: Unit[] = [
  {
    id: "p1-u1",
    paper: "p1",
    no: 1,
    title: L("Teaching Aptitude", "അധ്യാപന യോഗ്യത"),
    examNote: L(
      "Exactly 5 questions, 10 marks. Among the most scoring Paper I units if terms are crisp.",
      "കൃത്യം 5 ചോദ്യം, 10 മാർക്ക്. പദങ്ങൾ കൃത്യമെങ്കിൽ പേപ്പർ I-ലെ ഏറ്റവും സ്കോർ ചെയ്യാവുന്ന യൂണിറ്റുകളിൽ ഒന്ന്.",
    ),
    jrfWhy: L(
      "JRF does not ask harder teaching theory — it asks cleaner matching. Mix-ups between memory / understanding / reflective, or formative vs summative, cost two marks each. Five clean answers here are 10 marks toward the 216+ Visual Art JRF line.",
      "ജെആർഎഫ് കൂടുതൽ കഠിനമായ അധ്യാപന സിദ്ധാന്തം ചോദിക്കുന്നില്ല — കൂടുതൽ വൃത്തിയുള്ള മാച്ചിംഗ് ചോദിക്കുന്നു. മെമ്മറി/അണ്ടർസ്റ്റാൻഡിംഗ്/റിഫ്ലക്ടീവ് അല്ലെങ്കിൽ ഫോർമേറ്റീവ് vs സമ്മേറ്റീവ് കൂട്ടിക്കലർത്തൽ ഓരോന്നിനും രണ്ട് മാർക്ക് നഷ്ടം. ഇവിടെ അഞ്ച് വൃത്തിയുള്ള ഉത്തരം 216+ ക്യൂട്ട്-ഓഫിലേക്ക് 10 മാർക്ക്.",
    ),
    howAsked: L(
      "Assertion–Reason, matching lists (levels × educationists), ‘which is learner-centred’, SWAYAM/MOOC identification, CBCS and CBT evaluation items.",
      "അസർഷൻ–റീസൺ, മാച്ചിംഗ് (ലെവലുകൾ × വിദ്യാഭ്യാസചിന്തകർ), ‘ഏതാണ് ലേണർ-സെന്റേർഡ്’, SWAYAM/MOOC തിരിച്ചറിയൽ, CBCS, CBT മൂല്യനിർണയ ഇനങ്ങൾ.",
    ),
    repeats: L(
      "Three levels of teaching (Herbart memory, Morrison understanding, Hunt reflective) appear almost every paper. Bloom’s domains, andragogy vs pedagogy, formative/summative, NRT/CRT, SWAYAM and SWAYAM Prabha.",
      "അധ്യാപനത്തിന്റെ മൂന്ന് തലങ്ങൾ (ഹെർബാർട്ട് മെമ്മറി, മോറിസൺ അണ്ടർസ്റ്റാൻഡിംഗ്, ഹണ്ട് റിഫ്ലക്ടീവ്) ഏതാണ്ട് എല്ലാ പേപ്പറിലും. ബ്ലൂമിന്റെ ഡൊമെയ്നുകൾ, ആൻഡ്രഗോജി vs പെഡഗോജി, ഫോർമേറ്റീവ്/സമ്മേറ്റീവ്, NRT/CRT, SWAYAM, SWAYAM Prabha.",
    ),
    shifts: L(
      "Online methods keep adding names: MOOCs, SWAYAM, SWAYAM Prabha, now also APAAR, digital universities, blended learning. Evaluation questions mention CBCS, Outcome-Based Education and computer-based testing more than old oral viva items.",
      "ഓൺലൈൻ രീതികളിൽ പേരുകൾ കൂടുന്നു: MOOCs, SWAYAM, SWAYAM Prabha, ഇപ്പോൾ APAAR, ഡിജിറ്റൽ യൂണിവേഴ്സിറ്റി, ബ്ലെൻഡഡ് ലേണിംഗ്. മൂല്യനിർണയം CBCS, OBE, കമ്പ്യൂട്ടർ ബേസ്ഡ് ടെസ്റ്റിംഗ് കൂടുതൽ ചോദിക്കുന്നു.",
    ),
    method: L(
      "Make one table: Level | Thinker | Teacher role | Learner role | Goal. Recite it daily for four days. Then drill 15 MCQs. Never read this unit as an essay — NTA asks labels.",
      "ഒരു ടേബിൾ ഉണ്ടാക്കുക: തല | ചിന്തകൻ | അധ്യാപക റോൾ | വിദ്യാർത്ഥി റോൾ | ലക്ഷ്യം. നാല് ദിവസം ഉച്ചരിച്ച് പഠിക്കുക. പിന്നെ 15 എംസിക്യു. ഈ യൂണിറ്റ് ഉപന്യാസമായി വായിക്കരുത് — എൻടിഎ ലേബലുകൾ ചോദിക്കുന്നു.",
    ),
    sections: [
      {
        heading: L("What teaching is, in NTA language", "എൻടിഎ ഭാഷയിൽ അധ്യാപനം എന്താണ്"),
        body: L(
          "Teaching is an **intentional, interpersonal process** that helps a learner change in knowledge, skill or attitude. NTA wants **objectives** (why we teach), **levels** (how deep), and **requirements** (teacher competence, learner readiness, content, environment).\n\nBasic requirements: mastery of content, communication, understanding of the learner, and a usable support system. If any one is missing, teaching can happen as talk, but not as learning.",
          "അധ്യാപനം വിദ്യാർത്ഥിയുടെ അറിവ്, കഴിവ് അല്ലെങ്കിൽ മനോഭാവം മാറ്റാൻ സഹായിക്കുന്ന **ഉദ്ദേശ്യപൂർവ്വമായ, പരസ്പര പ്രക്രിയ**യാണ്. എൻടിഎ **ലക്ഷ്യങ്ങൾ**, **തലങ്ങൾ**, **ആവശ്യകതകൾ** (അധ്യാപക കഴിവ്, വിദ്യാർത്ഥി സജ്ജത, ഉള്ളടക്കം, പരിസരം) ആണ് വേണ്ടത്.\n\nഅടിസ്ഥാന ആവശ്യകതകൾ: ഉള്ളടക്ക മാസ്റ്ററി, ആശയവിനിമയം, വിദ്യാർത്ഥിയെ മനസ്സിലാക്കൽ, ഉപയോഗിക്കാവുന്ന സപ്പോർട്ട് സിസ്റ്റം. ഒന്ന് ഇല്ലെങ്കിൽ സംസാരം നടക്കും, പഠനം നടക്കണമെന്നില്ല.",
        ),
      },
      {
        heading: L("Three levels — the most tested block", "മൂന്ന് തലങ്ങൾ — ഏറ്റവും കൂടുതൽ ചോദിക്കുന്ന ബ്ലോക്ക്"),
        body: L(
          "**Memory level (Herbart):** rote, recall, teacher-centred, little transfer. Drill, dictation, factual tests.\n\n**Understanding level (Morrison):** insight into relationships, explanation, examples, moderately learner-active. Morrison’s cycle: exploration, presentation, assimilation, organisation, recitation.\n\n**Reflective level (Hunt):** problem-solving, critical thinking, learner-centred, hypothetical. The teacher is a facilitator. This is the level NEP 2020 rhetoric points toward — and the option NTA often keys as ‘highest’.",
          "**മെമ്മറി തലം (ഹെർബാർട്ട്):** റോട്ട്, ഓർമ്മ, അധ്യാപക കേന്ദ്രിതം, കൈമാറ്റം കുറവ്.\n\n**അണ്ടർസ്റ്റാൻഡിംഗ് തലം (മോറിസൺ):** ബന്ധങ്ങളിലേക്കുള്ള ഉൾക്കാഴ്ച, വിശദീകരണം, ഉദാഹരണം. മോറിസന്റെ ചക്രം: exploration, presentation, assimilation, organisation, recitation.\n\n**റിഫ്ലക്ടീവ് തലം (ഹണ്ട്):** പ്രശ്നപരിഹാരം, വിമർശനാത്മക ചിന്ത, വിദ്യാർത്ഥി കേന്ദ്രിതം. അധ്യാപകൻ ഫെസിലിറ്റേറ്റർ. NEP 2020 ചൂണ്ടിക്കാണിക്കുന്ന ഏറ്റവും ഉയർന്ന തലം — എൻടിഎ പലപ്പോഴും ‘highest’ ആയി കീ ചെയ്യുന്ന ഓപ്ഷൻ.",
        ),
      },
      {
        heading: L("Learners, methods, supports, evaluation", "വിദ്യാർത്ഥി, രീതി, സപ്പോർട്ട്, മൂല്യനിർണയം"),
        body: L(
          "**Adolescents:** identity, peer influence, abstract thought emerging. **Adults (Knowles’ andragogy):** self-directed, experience-rich, problem-centred, ready when the task is life-relevant.\n\n**Teacher-centred:** lecture, demonstration. **Learner-centred:** discussion, project, heuristic, seminar, peer teaching, flipped classroom.\n\n**Online names to lock:** SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds), SWAYAM Prabha (DTH channels), MOOCs, NPTEL.\n\n**Evaluation:** formative (during; feedback) vs summative (end; certification). Norm-referenced (rank in a group) vs criterion-referenced (against a standard). CBCS uses credits, grades, SGPA/CGPA. CBT is computer-based testing — what NTA itself uses.",
          "**കൗമാരക്കാർ:** ഐഡന്റിറ്റി, പിയർ സ്വാധീനം, അമൂർത്ത ചിന്ത. **മുതിർന്നവർ (നോൾസ് ആൻഡ്രഗോജി):** സ്വയം നിയന്ത്രിതം, അനുഭവസമൃദ്ധം, പ്രശ്നകേന്ദ്രിതം.\n\n**അധ്യാപക കേന്ദ്രിതം:** ലെക്ചർ, ഡെമോൺസ്ട്രേഷൻ. **വിദ്യാർത്ഥി കേന്ദ്രിതം:** ചർച്ച, പ്രോജക്ട്, ഹ്യൂറിസ്റ്റിക്, സെമിനാർ, പിയർ, ഫ്ലിപ്പ്ഡ് ക്ലാസ്.\n\n**ഓൺലൈൻ പേരുകൾ:** SWAYAM, SWAYAM Prabha (DTH), MOOCs, NPTEL.\n\n**മൂല്യനിർണയം:** ഫോർമേറ്റീവ് (ഇടയിൽ; ഫീഡ്ബാക്ക്) vs സമ്മേറ്റീവ് (അവസാനം; സർട്ടിഫിക്കേഷൻ). NRT vs CRT. CBCS: ക്രെഡിറ്റ്, ഗ്രേഡ്, SGPA/CGPA. CBT: എൻടിഎ തന്നെ ഉപയോഗിക്കുന്ന കമ്പ്യൂട്ടർ ടെസ്റ്റ്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Memory level is ‘basic’ so it is best for university.", "മെമ്മറി തലം ‘ബേസിക്’ ആയതിനാൽ യൂണിവേഴ്സിറ്റിക്ക് ഏറ്റവും നല്ലത്."),
        right: L("Higher education should push understanding and reflective levels. Memory is necessary but not sufficient.", "ഉന്നതവിദ്യാഭ്യാസം അണ്ടർസ്റ്റാൻഡിംഗ്, റിഫ്ലക്ടീവ് തലങ്ങളിലേക്ക് നീങ്ങണം. മെമ്മറി ആവശ്യമാണ്, മതിയാകില്ല."),
        fix: L("Whenever a question says ‘highest / most desirable in HE’, pick reflective (Hunt).", "‘ഉന്നതവിദ്യാഭ്യാസത്തിൽ ഏറ്റവും ഉയർന്നത്’ എന്ന് കണ്ടാൽ റിഫ്ലക്ടീവ് (ഹണ്ട്) തിരഞ്ഞെടുക്കുക."),
      },
      {
        wrong: L("Formative evaluation is the end-semester exam.", "ഫോർമേറ്റീവ് മൂല്യനിർണയം എന്നാൽ സെമസ്റ്റർ അവസാന പരീക്ഷ."),
        right: L("End-semester is summative. Formative is continuous — quizzes, drafts, feedback.", "സെമസ്റ്റർ അവസാനം സമ്മേറ്റീവ്. ഫോർമേറ്റീവ് തുടർച്ചയാണ് — ക്വിസ്, ഡ്രാഫ്റ്റ്, ഫീഡ്ബാക്ക്."),
        fix: L("Link the words: formative = during + improve; summative = after + judge.", "ഫോർമേറ്റീവ് = ഇടയിൽ + മെച്ചപ്പെടുത്തുക; സമ്മേറ്റീവ് = ശേഷം + വിധിക്കുക."),
      },
    ],
    flash: [
      { term: L("SWAYAM", "SWAYAM"), def: L("Study Webs of Active-Learning for Young Aspiring Minds — Indian MOOC platform.", "ഇന്ത്യൻ MOOC പ്ലാറ്റ്ഫോം — Study Webs of Active-Learning for Young Aspiring Minds.") },
      { term: L("SWAYAM Prabha", "SWAYAM Prabha"), def: L("DTH channels for education (32 originally).", "വിദ്യാഭ്യാസത്തിനുള്ള ഡിടിഎച്ച് ചാനലുകൾ (ആദ്യം 32).") },
      { term: L("Andragogy", "ആൻഡ്രഗോജി"), def: L("Knowles: adult learning — self-directed, experiential, problem-centred.", "നോൾസ്: മുതിർന്നവരുടെ പഠനം — സ്വയം നിയന്ത്രിതം, അനുഭവാധിഷ്ഠിതം, പ്രശ്നകേന്ദ്രിതം.") },
    ],
  },
  {
    id: "p1-u2",
    paper: "p1",
    no: 2,
    title: L("Research Aptitude", "ഗവേഷണ യോഗ്യത"),
    examNote: L("5 questions. JRF-level items hide in sampling, ethics, and positivism.", "5 ചോദ്യം. സാമ്പ്ലിംഗ്, എത്തിക്സ്, പോസിറ്റിവിസം എന്നിവയിൽ ജെആർഎഫ് ഇനങ്ങൾ ഒളിക്കുന്നു."),
    jrfWhy: L(
      "Paper II Visual Art also rewards research literacy (iconology, methods, ethics). Paper I Unit II is where you practise the same vocabulary NTA uses in both papers.",
      "പേപ്പർ II ദൃശ്യകലയിലും ഗവേഷണ സാക്ഷരത (ഐക്കണോളജി, മെത്തേഡ്, എത്തിക്സ്) മാർക്ക് തരും. രണ്ട് പേപ്പറിലും എൻടിഎ ഉപയോഗിക്കുന്ന അതേ പദാവലി ഇവിടെ പഠിക്കുക.",
    ),
    howAsked: L(
      "Type of research (fundamental / applied / action), method (historical, experimental, qualitative), steps in order, referencing styles, plagiarism, positivism vs post-positivism.",
      "ഗവേഷണ തരം (ഫണ്ടമെന്റൽ / അപ്ലൈഡ് / ആക്ഷൻ), മെത്തേഡ്, ഘട്ടങ്ങളുടെ ക്രമം, റഫറൻസിംഗ്, പ്ലാജിയറിസം, പോസിറ്റിവിസം vs പോസ്റ്റ്-പോസിറ്റിവിസം.",
    ),
    repeats: L(
      "Action research = practitioner solving a local problem. Positivism = observable, objective, quantitative. Snowball sampling for hidden populations. APA/MLA/Chicago identification. Steps of research in order.",
      "ആക്ഷൻ റിസർച്ച് = പ്രാദേശിക പ്രശ്നം പ്രാക്ടീഷണർ പരിഹരിക്കുന്നു. പോസിറ്റിവിസം = നിരീക്ഷണയോഗ്യം, വസ്തുനിഷ്ഠം, ക്വാണ്ടിറ്റേറ്റീവ്. ഹിഡൻ പോപ്പുലേഷന് സ്നോബോൾ. APA/MLA/Chicago. ഗവേഷണ ഘട്ടങ്ങളുടെ ക്രമം.",
    ),
    shifts: L(
      "ICT in research (Zotero, SPSS, Turnitin, data repositories) and research ethics (UGC academic integrity regs, predatory journals) appear more after 2019.",
      "ഗവേഷണത്തിലെ ഐസിടി (Zotero, SPSS, Turnitin)യും എത്തിക്സും (യുജിസി അക്കാദമിക് ഇന്റഗ്രിറ്റി, പ്രെഡറ്ററി ജേണലുകൾ) 2019-ന് ശേഷം കൂടുതൽ.",
    ),
    method: L(
      "Draw the research cycle on paper: question → review → hypothesis/objectives → design → sample → tools → data → analysis → report → ethics throughout. Then one page of sampling types with a single example each.",
      "ഗവേഷണ ചക്രം വരയ്ക്കുക: ചോദ്യം → റിവ്യൂ → ഹൈപ്പോതസിസ് → ഡിസൈൻ → സാമ്പിൾ → ടൂൾ → ഡാറ്റ → അനാലിസിസ് → റിപ്പോർട്ട് → എത്തിക്സ്. പിന്നെ ഓരോ സാമ്പ്ലിംഗ് തരത്തിനും ഒരു ഉദാഹരണം.",
    ),
    sections: [
      {
        heading: L("Meaning, types, two big philosophies", "അർഥം, തരങ്ങൾ, രണ്ട് തത്ത്വചിന്തകൾ"),
        body: L(
          "Research is a **systematic, replicable search for answers**. **Fundamental** (pure, theory), **applied** (solve a practical problem), **action** (insider, cyclical, improve practice), **descriptive**, **exploratory**, **explanatory**.\n\n**Positivism:** reality is out there; measure it; hypothesis testing; quantitative. **Post-positivism:** reality exists but is only imperfectly knowable; triangulation; falsification (Popper). Qualitative traditions (interpretivism, constructivism) sit further along this spectrum — meaning is made, not just measured.",
          "ഗവേഷണം **ക്രമബദ്ധവും ആവർത്തിക്കാവുന്നതുമായ ഉത്തരാന്വേഷണം** ആണ്. **ഫണ്ടമെന്റൽ** (സിദ്ധാന്തം), **അപ്ലൈഡ്** (പ്രായോഗിക പ്രശ്നം), **ആക്ഷൻ** (ഉള്ളിൽ നിന്ന്, ചാക്രികം, പ്രാക്ടീസ് മെച്ചപ്പെടുത്തൽ).\n\n**പോസിറ്റിവിസം:** യാഥാർഥ്യം പുറത്തുണ്ട്; അളക്കുക; ക്വാണ്ടിറ്റേറ്റീവ്. **പോസ്റ്റ്-പോസിറ്റിവിസം:** യാഥാർഥ്യമുണ്ട് പക്ഷേ അപൂർണമായേ അറിയൂ; ട്രയാംഗുലേഷൻ; ഫാൽസിഫിക്കേഷൻ (പോപ്പർ).",
        ),
      },
      {
        heading: L("Methods, steps, writing, ethics", "മെത്തേഡ്, ഘട്ടങ്ങൾ, എഴുത്ത്, എത്തിക്സ്"),
        body: L(
          "**Experimental:** manipulate IV, control, random assignment. **Historical:** sources, external/internal criticism. **Descriptive:** surveys, status studies. **Qualitative:** interview, ethnography, phenomenology, grounded theory.\n\n**Typical steps:** identify problem → literature → objectives/hypothesis → design → sample → collect → analyse → conclude → report.\n\n**Thesis:** prelims, body, references, appendices. Styles: **APA** (social sciences), **MLA** (humanities), **Chicago/Turabian**, **Harvard**.\n\n**Ethics:** informed consent, confidentiality, no fabrication/falsification/plagiarism (FFP), avoid predatory journals, acknowledge funding, no simultaneous submission.",
          "**എക്സ്പെരിമെന്റൽ:** IV മാറ്റുക, കൺട്രോൾ, റാൻഡം അസൈൻമെന്റ്. **ഹിസ്റ്റോറിക്കൽ:** സ്രോതസ്സ്, ബാഹ്യ/ആന്തരിക ക്രിട്ടിസിസം. **ക്വാളിറ്റേറ്റീവ്:** ഇന്റർവ്യൂ, എത്നോഗ്രഫി, ഫിനോമിനോളജി.\n\n**ഘട്ടങ്ങൾ:** പ്രശ്നം → സാഹിത്യം → ലക്ഷ്യം/ഹൈപ്പോതസിസ് → ഡിസൈൻ → സാമ്പിൾ → ശേഖരണം → വിശകലനം → നിഗമനം → റിപ്പോർട്ട്.\n\n**സ്റ്റൈൽ:** APA, MLA, ചിക്കാഗോ, ഹാർവാർഡ്.\n\n**എത്തിക്സ്:** സമ്മതം, രഹസ്യത, FFP ഇല്ല, പ്രെഡറ്ററി ജേണൽ ഒഴിവാക്കുക.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Action research is the same as applied research done by an outsider.", "ആക്ഷൻ റിസർച്ച് പുറത്തുള്ളയാൾ ചെയ്യുന്ന അപ്ലൈഡ് റിസർച്ച് ആണ്."),
        right: L("Action research is by the practitioner, in their own setting, in cycles of plan–act–observe–reflect.", "ആക്ഷൻ റിസർച്ച് പ്രാക്ടീഷണർ തന്റെ സെറ്റിംഗിൽ പ്ലാൻ–ആക്ട്–ഒബ്സർവ്–റിഫ്ലക്ട് ചക്രത്തിൽ ചെയ്യുന്നു."),
        fix: L("Keyword ‘teacher in her own classroom’ = action research.", "‘ടീച്ചർ സ്വന്തം ക്ലാസിൽ’ എന്നാൽ ആക്ഷൻ റിസർച്ച്."),
      },
    ],
    flash: [
      { term: L("Positivism", "പോസിറ്റിവിസം"), def: L("Observable, measurable, value-neutral, typically quantitative.", "നിരീക്ഷണയോഗ്യം, അളക്കാവുന്നത്, മൂല്യനിരപേക്ഷം, സാധാരണ ക്വാണ്ടിറ്റേറ്റീവ്.") },
      { term: L("FFP", "FFP"), def: L("Fabrication, Falsification, Plagiarism — core research misconduct.", "ഫാബ്രിക്കേഷൻ, ഫാൽസിഫിക്കേഷൻ, പ്ലാജിയറിസം — അടിസ്ഥാന ഗവേഷണ തെറ്റ്.") },
    ],
  },
  {
    id: "p1-u3",
    paper: "p1",
    no: 3,
    title: L("Comprehension", "ഗ്രഹണം"),
    examNote: L("A passage + 5 questions. Purely skill. Train it; do not ‘study content’.", "ഒരു പാസേജ് + 5 ചോദ്യം. കഴിവ് മാത്രം. ഉള്ളടക്കം പഠിക്കേണ്ടതില്ല; പരിശീലിക്കുക."),
    jrfWhy: L(
      "This is the fastest 10 marks on the paper if you do not over-interpret. JRF candidates lose marks by bringing outside knowledge. Stay inside the passage.",
      "പാസേജിന് പുറത്തുള്ള അറിവ് കൊണ്ടുവരാതിരുന്നാൽ ഏറ്റവും വേഗത്തിലുള്ള 10 മാർക്ക്. ജെആർഎഫ് ആളുകൾ ഓവർ-ഇന്റർപ്രെറ്റ് ചെയ്ത് മാർക്ക് നഷ്ടപ്പെടുത്തുന്നു.",
    ),
    howAsked: L(
      "Main idea, tone, inference that is licensed by the text, vocabulary-in-context, what the author does NOT say.",
      "മുഖ്യ ആശയം, ടോൺ, പാഠം അനുവദിക്കുന്ന അനുമാനം, സന്ദർഭത്തിലെ അർഥം, രചയിതാവ് പറയാത്തത്.",
    ),
    repeats: L(
      "Passages on education, environment, technology, ethics, art and culture. Questions on title, central idea, synonyms in context.",
      "വിദ്യാഭ്യാസം, പരിസ്ഥിതി, സാങ്കേതികം, എത്തിക്സ്, കല. തലക്കെട്ട്, കേന്ദ്ര ആശയം, സന്ദർഭ പര്യായം.",
    ),
    shifts: L(
      "Passages have become slightly more abstract (policy, philosophy of education, climate justice) rather than simple stories.",
      "ലളിത കഥകളിൽ നിന്ന് നയം, വിദ്യാഭ്യാസ തത്ത്വചിന്ത, കാലാവസ്ഥാ നീതി പോലുള്ള അമൂർത്ത പാസേജുകളിലേക്ക്.",
    ),
    method: L(
      "Two-pass method: (1) read questions first so the eye knows what to hunt; (2) read the passage once, underline names, contrasts, conclusions. Never use studio knowledge to ‘improve’ an art-passage answer.",
      "രണ്ട് പാസ്: (1) ചോദ്യങ്ങൾ ആദ്യം — എന്ത് തേടണമെന്ന് അറിയാൻ; (2) പാസേജ് ഒരിക്കൽ, പേരുകൾ/വൈരുദ്ധ്യങ്ങൾ/നിഗമനങ്ങൾ അടിവരയിടുക. ആർട്ട് പാസേജിൽ സ്റ്റുഡിയോ അറിവ് കൊണ്ട് ഉത്തരം ‘മെച്ചപ്പെടുത്തരുത്’.",
    ),
    sections: [
      {
        heading: L("What NTA is testing", "എൻടിഎ പരീക്ഷിക്കുന്നത്"),
        body: L(
          "Not your general knowledge. The skill of **staying inside the text**: locating explicit facts, making a small inference, spotting tone (critical, celebratory, cautious), and rejecting options that are true in the world but unsaid in the paragraph.\n\nFor Visual Art candidates: if the passage is about Ajanta, and you know more than the author wrote, that extra knowledge is a trap.",
          "പൊതുവിജ്ഞാനമല്ല. **പാഠത്തിനുള്ളിൽ നിൽക്കുക**: വ്യക്തമായ വസ്തുത, ചെറിയ അനുമാനം, ടോൺ, ലോകത്ത് ശരിയാണെങ്കിലും ഖണ്ഡികയിൽ ഇല്ലാത്ത ഓപ്ഷൻ നിരസിക്കൽ.\n\nദൃശ്യകലാ വിദ്യാർത്ഥിക്ക്: പാസേജ് അജന്തയെക്കുറിച്ചാണെങ്കിൽ, രചയിതാവ് എഴുതാത്ത അധിക അറിവ് ഒരു കെണിയാണ്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("The ‘most complete’ option that adds outside facts.", "പുറത്തുള്ള വസ്തുതകൾ ചേർത്ത ‘ഏറ്റവും പൂർണ്ണമായ’ ഓപ്ഷൻ."),
        right: L("The option fully supported by the passage, even if narrower.", "ഇടുങ്ങിയതാണെങ്കിലും പാസേജ് പിന്തുണയ്ക്കുന്ന ഓപ്ഷൻ."),
        fix: L("Ask: can I point to a line? If not, reject.", "ഒരു വരി ചൂണ്ടിക്കാണിക്കാമോ? ഇല്ലെങ്കിൽ നിരസിക്കുക."),
      },
    ],
    flash: [
      { term: L("Inference", "അനുമാനം"), def: L("A conclusion that must be true if the passage is true — not a guess, not world knowledge.", "പാസേജ് ശരിയെങ്കിൽ ശരിയാകേണ്ട നിഗമനം — ഊഹമല്ല, ലോകജ്ഞാനമല്ല.") },
    ],
  },
  {
    id: "p1-u4",
    paper: "p1",
    no: 4,
    title: L("Communication", "ആശയവിനിമയം"),
    examNote: L("5 questions. Definitions + classroom + barriers + mass media.", "5 ചോദ്യം. നിർവചനം + ക്ലാസ്റൂം + ബാരിയർ + മാസ് മീഡിയ."),
    jrfWhy: L(
      "Classroom communication items overlap with Teaching Aptitude. One mixed question can sit in either unit — know both lists.",
      "ക്ലാസ്റൂം കമ്യൂണിക്കേഷൻ ടീച്ചിംഗ് അപ്റ്റിറ്റ്യൂഡുമായി ഓവർലാപ്പ് ചെയ്യുന്നു. രണ്ട് ലിസ്റ്റും അറിയുക.",
    ),
    howAsked: L(
      "Shannon–Weaver elements, types (verbal/non-verbal, intra/inter/group/mass), barriers (semantic, psychological, organisational), grapevine, 7 Cs, mass media and society.",
      "ഷാനൻ–വീവർ ഘടകങ്ങൾ, തരങ്ങൾ, ബാരിയറുകൾ, ഗ്രേപ്‌വൈൻ, 7 Cs, മാസ് മീഡിയയും സമൂഹവും.",
    ),
    repeats: L(
      "Semantic barrier, feedback as two-way mark, kinesics/proxemics/paralanguage, agenda-setting / cultivation as media effects.",
      "സെമാന്റിക് ബാരിയർ, ഫീഡ്ബാക്ക് = ദ്വിമുഖം, കൈനസിക്സ്/പ്രോക്സെമിക്സ്/പാരാലാംഗ്വേജ്, അജണ്ട-സെറ്റിംഗ്.",
    ),
    shifts: L(
      "Social media, misinformation, digital divide, and intercultural communication in Indian classrooms appear more often.",
      "സോഷ്യൽ മീഡിയ, തെറ്റായ വിവരം, ഡിജിറ്റൽ വിഭജനം, ഇന്ത്യൻ ക്ലാസിലെ അന്തർസാംസ്കാരിക ആശയവിനിമയം കൂടുതൽ.",
    ),
    method: L(
      "One diagram of Shannon–Weaver (sender, encoding, channel, noise, decoding, receiver, feedback). One list of barriers with an Indian classroom example each.",
      "ഷാനൻ–വീവർ ഡയഗ്രം ഒന്ന്. ഓരോ ബാരിയറിനും ഒരു ഇന്ത്യൻ ക്ലാസ് ഉദാഹരണം.",
    ),
    sections: [
      {
        heading: L("Meaning, types, classroom, barriers, media", "അർഥം, തരം, ക്ലാസ്, ബാരിയർ, മീഡിയ"),
        body: L(
          "Communication is the **transfer of meaning** (not just words) through a channel, with feedback. **Intrapersonal** (self), **interpersonal**, **group**, **public**, **mass**. **Verbal** and **non-verbal** (kinesics, proxemics, haptics, chronemics, paralanguage, artefacts).\n\n**Effective classroom communication** is two-way, uses feedback, reduces noise, respects intercultural difference.\n\n**Barriers:** physical, psychological, semantic (word meaning), organisational, cultural, physiological.\n\n**Mass media and society:** information, entertainment, surveillance, correlation, cultural transmission — and harms: stereotyping, agenda-setting, moral panic, digital inequality.",
          "ആശയവിനിമയം **അർഥത്തിന്റെ കൈമാറ്റം** ആണ്. **ഇൻട്രാ / ഇന്റർ / ഗ്രൂപ്പ് / പബ്ലിക് / മാസ്**. വാചികവും അവാചികവും.\n\n**ഫലപ്രദമായ ക്ലാസ് ആശയവിനിമയം** ദ്വിമുഖം, ഫീഡ്ബാക്ക്, നോയ്സ് കുറയ്ക്കൽ.\n\n**ബാരിയർ:** ഭൗതികം, മനഃശാസ്ത്രം, സെമാന്റിക്, സംഘടനാ, സാംസ്കാരികം.\n\n**മാസ് മീഡിയ:** വിവരം, വിനോദം, നിരീക്ഷണം — ദോഷം: സ്റ്റീരിയോടൈപ്പ്, അജണ്ട-സെറ്റിംഗ്, ഡിജിറ്റൽ അസമത്വം.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Noise is only loud sound.", "നോയ്സ് ഉച്ചത്തിലുള്ള ശബ്ദം മാത്രം."),
        right: L("Noise is anything that distorts the message — including prejudice and jargon.", "സന്ദേശം വികലമാക്കുന്നതെന്തും നോയ്സ് — മുൻവിധിയും ജാർഗണും ഉൾപ്പെടെ."),
        fix: L("If the option says ‘semantic noise’, think ‘same word, different meaning’.", "സെമാന്റിക് നോയ്സ് = ഒരേ വാക്ക്, വേറെ അർഥം."),
      },
    ],
    flash: [
      { term: L("7 Cs", "7 Cs"), def: L("Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.", "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.") },
      { term: L("Kinesics", "കൈനസിക്സ്"), def: L("Study of body movement as communication.", "ആശയവിനിമയമായി ശരീരചലനത്തിന്റെ പഠനം.") },
    ],
  },
  {
    id: "p1-u5",
    paper: "p1",
    no: 5,
    title: L("Mathematical Reasoning & Aptitude", "ഗണിത യുക്തിയും കഴിവും"),
    examNote: L("5 questions. Speed unit. Series, codes, percentages, ratio, averages, SI/CI.", "5 ചോദ്യം. സ്പീഡ് യൂണിറ്റ്. സീരീസ്, കോഡ്, ശതമാനം, അനുപാതം, ശരാശരി, പലിശ."),
    jrfWhy: L(
      "Everyone can learn this. JRF candidates treat it as a 10-mark gift by drilling types, not by fearing maths.",
      "എല്ലാവർക്കും പഠിക്കാം. തരങ്ങൾ ഡ്രിൽ ചെയ്ത് 10 മാർക്ക് സമ്മാനമായി കാണുക — ഗണിതഭയമല്ല.",
    ),
    howAsked: L(
      "Number/letter series, coding-decoding, blood relations, direction, fractions, percentage, ratio, profit-loss, SI/CI, time-distance, averages.",
      "നമ്പർ/ലെറ്റർ സീരീസ്, കോഡിംഗ്, ബന്ധം, ദിശ, ഭിന്നം, ശതമാനം, അനുപാതം, ലാഭനഷ്ടം, പലിശ, സമയ-ദൂരം, ശരാശരി.",
    ),
    repeats: L(
      "Missing term in a series, simple percentage change, average of a group, coding like A=1 or reverse alphabet.",
      "സീരീസിലെ കാണാത്ത പദം, ശതമാന മാറ്റം, ശരാശരി, A=1 അല്ലെങ്കിൽ റിവേഴ്സ് ആൽഫബെറ്റ് കോഡ്.",
    ),
    shifts: L(
      "Occasional data-sufficiency flavour and worded CI questions. Still school-level — no calculus.",
      "ചിലപ്പോൾ ഡാറ്റ-സഫിഷ്യൻസി ഭാവവും CI വാചക ചോദ്യങ്ങളും. സ്കൂൾ ലെവൽ — കാൽക്കുലസ് ഇല്ല.",
    ),
    method: L(
      "Keep a formula card: % = (part/whole)×100; SP = CP×(100±p)/100; SI = PRT/100; average = sum/n. Ten mixed questions every other day. Never skip — no negative marking.",
      "ഫോർമുല കാർഡ് സൂക്ഷിക്കുക. മറ്റ് ദിവസം 10 മിക്സഡ് ചോദ്യം. സ്കിപ്പ് ചെയ്യരുത് — നെഗറ്റീവ് ഇല്ല.",
    ),
    sections: [
      {
        heading: L("Reasoning types + school arithmetic", "യുക്തി തരങ്ങളും സ്കൂൾ ഗണിതവും"),
        body: L(
          "**Number series:** +n, ×n, squares, primes, alternate two series. **Letter series:** +1/+2 in alphabet, reverse (A↔Z). **Codes:** shift, reverse, opposite, mixed letter-number.\n\n**Aptitude:** fractions; ratio & proportion; percentage (including successive); profit & loss; simple & compound interest; time & distance (speed = distance/time); averages.\n\nIf two series are interleaved, split odd and even positions before panicking.",
          "**നമ്പർ സീരീസ്:** +n, ×n, വർഗ്ഗം, പ്രൈം, രണ്ട് സീരീസ് ഇടകലർന്നത്. **ലെറ്റർ:** ആൽഫബെറ്റ് ഷിഫ്റ്റ്, റിവേഴ്സ്. **കോഡ്:** ഷിഫ്റ്റ്, വിപരീതം.\n\n**ആപ്റ്റിറ്റ്യൂഡ്:** ഭിന്നം, അനുപാതം, ശതമാനം, ലാഭനഷ്ടം, പലിശ, സമയ-ദൂരം, ശരാശരി.\n\nരണ്ട് സീരീസ് ഇടകലർന്നാൽ ഒറ്റ/ഇരട്ട സ്ഥാനങ്ങൾ വേർതിരിക്കുക.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Leaving the question because ‘I am from arts’.", "‘ഞാൻ ആർട്സിൽ നിന്നാണ്’ എന്ന് വിചാരിച്ച് വിടുക."),
        right: L("These are pattern questions. Two minutes of splitting the series usually unlocks it.", "പാറ്റേൺ ചോദ്യങ്ങളാണ്. സീരീസ് പിളർത്തിയാൽ പലപ്പോഴും കിട്ടും."),
        fix: L("Always attempt. Guess after eliminating two options.", "എപ്പോഴും എഴുതുക. രണ്ട് ഓപ്ഷൻ നീക്കി ഊഹിക്കുക."),
      },
    ],
    flash: [
      { term: L("SI", "സാധാരണ പലിശ"), def: L("SI = (P × R × T) / 100.", "SI = (P × R × T) / 100.") },
      { term: L("Successive %", "തുടർ ശതമാനം"), def: L("Net = a + b + (ab)/100 (b negative for decrease).", "Net = a + b + (ab)/100 (കുറവിന് b നെഗറ്റീവ്).") },
    ],
  },
  {
    id: "p1-u6",
    paper: "p1",
    no: 6,
    title: L("Logical Reasoning", "തർക്കശാസ്ത്ര യുക്തി"),
    examNote: L("5 questions. Indian logic (pramanas) is a JRF separator.", "5 ചോദ്യം. ഇന്ത്യൻ ന്യായം (പ്രമാണങ്ങൾ) ജെആർഎഫ് വേർതിരിക്കൽ."),
    jrfWhy: L(
      "Visual Art students already meet Indian aesthetics; pramanas are the parallel epistemology. Scoring here lifts you above the Assistant Professor band.",
      "ദൃശ്യകലാ വിദ്യാർത്ഥിക്ക് ഇന്ത്യൻ സൗന്ദര്യശാസ്ത്രം അറിയാം; പ്രമാണങ്ങൾ അതിന്റെ അറിവ്-ശാസ്ത്ര ജോടി. ഇവിടെ സ്കോർ ചെയ്താൽ അസി. പ്രൊഫസർ ബാൻഡിന് മുകളിലേക്ക്.",
    ),
    howAsked: L(
      "Square of opposition, mood-figure of syllogism, formal vs informal fallacies, Venn validity, analogies, six pramanas, vyapti, hetvabhasa.",
      "സ്ക്വയർ ഓഫ് ഒപ്പോസിഷൻ, സിലജിസം മൂഡ്-ഫിഗർ, ഫാലസി, വെൻ, അനലജി, ആറ് പ്രമാണം, വ്യാപ്തി, ഹേത്വാഭാസം.",
    ),
    repeats: L(
      "Contradictories (A vs O, E vs I), pratyaksha/anumana/upamana/shabda/arthapatti/anupalabdhi matching, ‘which argument is inductive’.",
      "കോൺട്രഡിക്റ്ററി (A vs O, E vs I), പ്രത്യക്ഷ/അനുമാന/ഉപമാന/ശബ്ദ/അർഥാപത്തി/അനുപലബ്ധി മാച്ചിംഗ്, ഏത് ആർഗ്യുമെന്റ് ഇൻഡക്റ്റീവ്.",
    ),
    shifts: L(
      "More Indian-logic items after the 2019 syllabus rewrite — this block was expanded, not reduced.",
      "2019 സിലബസ് റീറൈറ്റിന് ശേഷം ഇന്ത്യൻ ന്യായ ഇനങ്ങൾ കൂടി — ഈ ബ്ലോക്ക് ചുരുങ്ങിയില്ല, വികസിച്ചു.",
    ),
    method: L(
      "Draw the square every morning for a week: A–E contrary, A–O contradictory, I–O subcontrary, A–I / E–O subaltern. Then six pramanas with one example each (smoke-fire; seeing the absent pot).",
      "ഒരാഴ്ച ദിവസവും സ്ക്വയർ വരയ്ക്കുക. പിന്നെ ആറ് പ്രമാണത്തിന് ഓരോ ഉദാഹരണം (പുക-തീ; ഇല്ലാത്ത കുടം).",
    ),
    sections: [
      {
        heading: L("Western structure + Indian pramanas", "പാശ്ചാത്യ ഘടന + ഇന്ത്യൻ പ്രമാണങ്ങൾ"),
        body: L(
          "**Categorical propositions:** A (all S are P), E (no S is P), I (some S are P), O (some S are not P). **Square:** contradictories cannot both be true or both false; contraries cannot both be true; subcontraries cannot both be false.\n\n**Deductive:** conclusion follows necessarily (syllogism). **Inductive:** probable generalisation.\n\n**Indian pramanas (Vedanta/Mimamsa list of six):** Pratyaksha (perception), Anumana (inference), Upamana (comparison), Shabda (verbal testimony), Arthapatti (postulation), Anupalabdhi (non-apprehension). Nyaya classically emphasises four (drops last two).\n\n**Anumana structure:** paksha, hetu, sadhya. **Vyapti** = invariable concomitance. **Hetvabhasas** = fallacies of reason (savyabhicara, viruddha, etc.).",
          "**A/E/I/O വാക്യങ്ങൾ** സ്ക്വയറിൽ. കോൺട്രഡിക്റ്ററി ഒരേസമയം ശരിയോ തെറ്റോ ആകില്ല.\n\n**ഡിഡക്റ്റീവ്:** നിർബന്ധമായ നിഗമനം. **ഇൻഡക്റ്റീവ്:** സാധ്യത.\n\n**ആറ് പ്രമാണം:** പ്രത്യക്ഷം, അനുമാനം, ഉപമാനം, ശബ്ദം, അർഥാപത്തി, അനുപലബ്ധി. ന്യായം പരമ്പരാഗതമായി നാല്.\n\n**അനുമാനം:** പക്ഷം, ഹേതു, സാധ്യം. **വ്യാപ്തി** = അവ്യാഭിചാര ബന്ധം. **ഹേത്വാഭാസം** = ഹേതു ദോഷങ്ങൾ.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Treating A and E as contradictories.", "A-യും E-യും കോൺട്രഡിക്റ്ററിയായി കാണുക."),
        right: L("A and E are contraries (both can be false: ‘all cats are black’ and ‘no cats are black’). Contradictory of A is O.", "A-യും E-യും കോൺട്രറി (രണ്ടും തെറ്റാകാം). A-യുടെ കോൺട്രഡിക്റ്ററി O."),
        fix: L("Memorise: A↔O and E↔I are the contradictory pairs.", "A↔O, E↔I ആണ് കോൺട്രഡിക്റ്ററി ജോടികൾ."),
      },
    ],
    flash: [
      { term: L("Arthapatti", "അർഥാപത്തി"), def: L("Postulation: Devadatta is fat and does not eat by day → he eats at night.", "കൽപ്പന: ദേവദത്തൻ തടിയാണ്, പകൽ ഭക്ഷിക്കുന്നില്ല → രാത്രി ഭക്ഷിക്കുന്നു.") },
      { term: L("Anupalabdhi", "അനുപലബ്ധി"), def: L("Knowledge of absence — the pot is not on the floor.", "അഭാവജ്ഞാനം — തറയിൽ കുടമില്ല.") },
    ],
  },
  {
    id: "p1-u7",
    paper: "p1",
    no: 7,
    title: L("Data Interpretation", "ഡാറ്റ വ്യാഖ്യാനം"),
    examNote: L("5 questions, often from one table/chart. Calculator not allowed — neat arithmetic.", "5 ചോദ്യം, പലപ്പോഴും ഒരു ടേബിൾ/ചാർട്ടിൽ നിന്ന്. കാൽക്കുലേറ്റർ ഇല്ല."),
    jrfWhy: L(
      "Accuracy under time. One misread axis costs 8–10 marks if all five hang on the same chart.",
      "സമയത്തിലെ കൃത്യത. ഒരു അക്ഷം തെറ്റായി വായിച്ചാൽ അഞ്ച് ചോദ്യവും — 8–10 മാർക്ക് — പോകാം.",
    ),
    howAsked: L(
      "Bar, pie, line, table, histogram. Ratio, percentage share, growth rate. A governance-data item (census, AISHE, NFHS) may appear as context.",
      "ബാർ, പൈ, ലൈൻ, ടേബിൾ, ഹിസ്റ്റോഗ്രാം. അനുപാതം, ശതമാനം, വളർച്ച. സെൻസസ്/AISHE പോലുള്ള ഗവേണൻസ് ഡാറ്റ.",
    ),
    repeats: L(
      "‘Which year showed highest growth’, pie-share to degrees (×3.6), comparing two bars.",
      "ഏറ്റവും ഉയർന്ന വളർച്ചയുള്ള വർഷം, പൈ ഷെയർ ഡിഗ്രിയിലേക്ക് (×3.6), രണ്ട് ബാർ താരതമ്യം.",
    ),
    shifts: L(
      "Qualitative vs quantitative data definitions, and ‘data and governance’ (open data, evidence-based policy) as standalone MCQs without a chart.",
      "ക്വാളിറ്റേറ്റീവ് vs ക്വാണ്ടിറ്റേറ്റീവ് നിർവചനം, ഡാറ്റയും ഭരണവും (ഓപ്പൺ ഡാറ്റ, തെളിവ്-ആധാരിത നയം) ചാർട്ട് ഇല്ലാതെ.",
    ),
    method: L(
      "Before computing, write what the question asks in one short line. Check units (lakhs vs crores, % vs absolute). Do the easiest of the five first to lock the chart in your head.",
      "കണക്കിന് മുമ്പ് ചോദ്യം ഒരു വരിയായി എഴുതുക. യൂണിറ്റ് നോക്കുക. അഞ്ചിൽ എളുപ്പമുള്ളത് ആദ്യം — ചാർട്ട് മനസ്സിൽ നിൽക്കും.",
    ),
    sections: [
      {
        heading: L("Sources, types, graphs, governance", "സ്രോതസ്സ്, തരം, ഗ്രാഫ്, ഭരണം"),
        body: L(
          "**Sources:** primary (you collect) vs secondary (already published). **Classification:** qualitative (nominal, ordinal) vs quantitative (discrete, continuous).\n\n**Graphs:** bar (compare categories), histogram (continuous distribution — no gaps), pie (parts of a whole; 1% = 3.6°), line (trend over time), table (precise values).\n\n**Data and governance:** census, civil registration, AISHE, NFHS, open government data — policy should be evidence-based, privacy-respecting, and auditable.",
          "**സ്രോതസ്സ്:** പ്രാഥമികം vs ദ്വിതീയം. **ക്വാളിറ്റേറ്റീവ്** (നോമിനൽ, ഓർഡിനൽ) vs **ക്വാണ്ടിറ്റേറ്റീവ്** (ഡിസ്ക്രീറ്റ്, കണ്ടിന്യൂവസ്).\n\n**ഗ്രാഫ്:** ബാർ, ഹിസ്റ്റോഗ്രാം (ഗാപ്പ് ഇല്ല), പൈ (1% = 3.6°), ലൈൻ, ടേബിൾ.\n\n**ഡാറ്റയും ഭരണവും:** സെൻസസ്, AISHE, NFHS, ഓപ്പൺ ഡാറ്റ — തെളിവ്-ആധാരിത നയം, സ്വകാര്യത, ഓഡിറ്റ്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Reading a histogram as a bar chart with gaps.", "ഹിസ്റ്റോഗ്രാമിനെ ഗാപ്പുള്ള ബാർ ചാർട്ടായി വായിക്കുക."),
        right: L("Histograms touch; they show frequency of a continuous variable.", "ഹിസ്റ്റോഗ്രാം തമ്മിൽ ഒട്ടി നിൽക്കുന്നു; കണ്ടിന്യൂവസ് വേരിയബിളിന്റെ ഫ്രീക്വൻസി."),
        fix: L("If the x-axis is class intervals, it is a histogram.", "X-അക്ഷം ക്ലാസ് ഇടവേളയാണെങ്കിൽ ഹിസ്റ്റോഗ്രാം."),
      },
    ],
    flash: [
      { term: L("Pie to degrees", "പൈയിൽ ഡിഗ്രി"), def: L("Angle = (share/100) × 360 = share × 3.6.", "കോൺ = (ഷെയർ/100) × 360 = ഷെയർ × 3.6.") },
    ],
  },
  {
    id: "p1-u8",
    paper: "p1",
    no: 8,
    title: L("ICT", "ഐസിടി"),
    examNote: L("5 questions. Abbreviations + Indian digital HE initiatives. High current-affairs turnover.", "5 ചോദ്യം. ചുരുക്കെഴുത്ത് + ഇന്ത്യൻ ഡിജിറ്റൽ HE. കറന്റ് അഫയേഴ്സ് വേഗം മാറും."),
    jrfWhy: L(
      "This unit plus Unit X is where six-month updates matter most. JRF papers punish last-cycle memory (old portal names, defunct schemes).",
      "ആറുമാസ അപ്ഡേറ്റ് ഏറ്റവും പ്രധാനം ഇവിടെയും യൂണിറ്റ് X-ലും. പഴയ പോർട്ടൽ പേരുകൾ ജെആർഎഫ് പേപ്പറിൽ ശിക്ഷിക്കപ്പെടും.",
    ),
    howAsked: L(
      "Full form (HTTP, URL, VPN, OCR), internet vs intranet, email protocols, conferencing, SWAYAM / NDLI / NAD / Diksha matching, ICT and governance (e-Kranti, MyGov).",
      "ഫുൾ ഫോം, ഇന്റർനെറ്റ് vs ഇൻട്രാനെറ്റ്, ഇമെയിൽ പ്രോട്ടോക്കോൾ, കോൺഫറൻസിംഗ്, SWAYAM/NDLI/NAD മാച്ചിംഗ്, ഇ-ഗവേണൻസ്.",
    ),
    repeats: L(
      "HTTP/HTTPS, IP vs MAC, RAM vs ROM, compiler vs interpreter, MOOC, LMS, SWAYAM year/expansion.",
      "HTTP/HTTPS, IP vs MAC, RAM vs ROM, കംപൈലർ vs ഇന്റർപ്രെട്ടർ, MOOC, LMS, SWAYAM.",
    ),
    shifts: L(
      "APAAR ID, National Digital University discussions, Bhashini/Anuvadini, DigiLocker, ABACUS, and cybersecurity / data-protection framing.",
      "APAAR ഐഡി, നാഷണൽ ഡിജിറ്റൽ യൂണിവേഴ്സിറ്റി, Bhashini/Anuvadini, DigiLocker, സൈബർ സുരക്ഷ / ഡാറ്റ സംരക്ഷണം.",
    ),
    method: L(
      "Maintain a living abbreviation list. Every Sunday add anything new from PIB Education. Match initiative → ministry → purpose, not just the acronym.",
      "ചുരുക്കെഴുത്ത് ലിസ്റ്റ് ജീവനോടെ വയ്ക്കുക. ഞായറാഴ്ച PIB Education-ൽ നിന്ന് പുതിയത് ചേർക്കുക. സംരംഭം → മന്ത്രാലയം → ലക്ഷ്യം.",
    ),
    sections: [
      {
        heading: L("Terms, networks, Indian HE digital stack", "പദങ്ങൾ, നെറ്റ്‌വർക്ക്, ഇന്ത്യൻ HE ഡിജിറ്റൽ സ്റ്റാക്ക്"),
        body: L(
          "**Must-know expansions:** ICT, HTTP, HTML, URL, SMS, GPS, OCR, MICR, GUI, CPU, ALU, ISP, VPN, IoT, AI, LMS, MOOC, OERs.\n\n**Internet** = public global network. **Intranet** = private organisational network. Email: SMTP (send), IMAP/POP (receive). Conferencing: audio/video over IP.\n\n**Digital HE:** SWAYAM, SWAYAM Prabha, NPTEL, e-PG Pathshala, NDLI (National Digital Library of India), NAD (National Academic Depository) via DigiLocker, Diksha (school teachers), virtual labs, NMEICT.\n\n**ICT and governance:** e-governance pillars, MyGov, UMANG, Digital India — transparency, speed, inclusion, and the risk of exclusion if connectivity is weak.",
          "**എക്സ്പാൻഷൻ:** ICT, HTTP, HTML, URL, OCR, VPN, IoT, LMS, MOOC, OER.\n\n**ഇന്റർനെറ്റ്** പൊതു; **ഇൻട്രാനെറ്റ്** സ്വകാര്യം. ഇമെയിൽ: SMTP അയയ്ക്കൽ, IMAP/POP സ്വീകരണം.\n\n**ഡിജിറ്റൽ HE:** SWAYAM, SWAYAM Prabha, NPTEL, e-PG Pathshala, NDLI, NAD/DigiLocker, ദീക്ഷ, NMEICT.\n\n**ഐസിടിയും ഭരണവും:** ഡിജിറ്റൽ ഇന്ത്യ, MyGov, UMANG — വേഗം, സുതാര്യത; കണക്റ്റിവിറ്റി ഇല്ലെങ്കിൽ ഒഴിവാക്കൽ.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Confusing SWAYAM (MOOC platform) with SWAYAM Prabha (DTH).", "SWAYAM (MOOC) SWAYAM Prabha (DTH)യുമായി കൂട്ടിക്കലർത്തുക."),
        right: L("Prabha = satellite TV channels; SWAYAM = online courses and credit transfer.", "പ്രഭ = സാറ്റലൈറ്റ് ടിവി ചാനൽ; SWAYAM = ഓൺലൈൻ കോഴ്സും ക്രെഡിറ്റ് ട്രാൻസ്ഫറും."),
        fix: L("Prabha has ‘channel’ in every correct option; SWAYAM has ‘course/credit’.", "പ്രഭയുടെ ശരി ഓപ്ഷനിൽ ചാനൽ; SWAYAM-ൽ കോഴ്സ്/ക്രെഡിറ്റ്."),
      },
    ],
    flash: [
      { term: L("NDLI", "NDLI"), def: L("National Digital Library of India — IIT Kharagpur, MoE.", "നാഷണൽ ഡിജിറ്റൽ ലൈബ്രറി ഓഫ് ഇന്ത്യ — IIT ഖർഗ്പൂർ, വിദ്യാഭ്യാസ മന്ത്രാലയം.") },
      { term: L("NAD", "NAD"), def: L("National Academic Depository — digital academic awards, now via DigiLocker.", "നാഷണൽ അക്കാദമിക് ഡിപോസിറ്ററി — ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ്, ഇപ്പോൾ DigiLocker വഴി.") },
    ],
  },
  {
    id: "p1-u9",
    paper: "p1",
    no: 9,
    title: L("People, Development & Environment", "ജനത, വികസനം, പരിസ്ഥിതി"),
    examNote: L("5 questions. Treaties and years are the JRF kill-zone.", "5 ചോദ്യം. ഉടമ്പടികളും വർഷങ്ങളും ജെആർഎഫ് കിൽ-സോൺ."),
    jrfWhy: L(
      "One confused protocol (Montreal vs Kyoto vs Paris) is a classic 2-mark gift to the paper. JRF takers keep a treaty timeline.",
      "മോൺട്രിയൽ vs ക്യോട്ടോ vs പാരീസ് കൂട്ടിക്കലർത്തൽ ക്ലാസിക് 2-മാർക്ക് നഷ്ടം. ജെആർഎഫ് ആളുകൾ ഉടമ്പടി ടൈംലൈൻ വയ്ക്കുന്നു.",
    ),
    howAsked: L(
      "MDG vs SDG, pollutant–disease pairs, energy sources, disaster mitigation, EPA 1986, NAPCC missions, Montreal/Rio/Kyoto/Paris/ISA/CBD.",
      "MDG vs SDG, മലിനീകാരി–രോഗം, ഊർജ്ജം, ദുരന്ത ലഘൂകരണം, EPA 1986, NAPCC, മോൺട്രിയൽ/റിയോ/ക്യോട്ടോ/പാരീസ്/ISA/CBD.",
    ),
    repeats: L(
      "Paris 2015, Kyoto 1997 (binding for Annex I, Kyoto period), Montreal 1987 ozone, Rio 1992, SDG 17 goals / 2015–2030, NAPCC eight missions.",
      "പാരീസ് 2015, ക്യോട്ടോ 1997, മോൺട്രിയൽ 1987 ഓസോൺ, റിയോ 1992, SDG 17 / 2015–2030, NAPCC എട്ട് മിഷൻ.",
    ),
    shifts: L(
      "Kunming–Montreal biodiversity framework, updated Indian NDCs, ISA headquarters (Gurugram), climate justice language, e-waste rules.",
      "കുൻമിങ്–മോൺട്രിയൽ ജൈവവൈവിധ്യ ചട്ടക്കൂട്, ഇന്ത്യയുടെ പുതിയ NDC, ISA ആസ്ഥാനം ഗുഡ്ഗാവ്, ഇ-വേസ്റ്റ് റൂൾസ്.",
    ),
    method: L(
      "One timeline strip: 1972 Stockholm → 1985 Vienna → 1987 Montreal → 1992 Rio (UNFCCC, CBD, Agenda 21) → 1997 Kyoto → 2002 Johannesburg → 2015 Paris + SDGs + ISA → 2016 Kigali. Recite it until it is automatic.",
      "ടൈംലൈൻ: 1972 സ്റ്റോക്ക്ഹോം → 1987 മോൺട്രിയൽ → 1992 റിയോ → 1997 ക്യോട്ടോ → 2015 പാരീസ്+SDG+ISA. യാന്ത്രികമാകും വരെ ഉച്ചരിക്കുക.",
    ),
    sections: [
      {
        heading: L("Development, pollution, energy, law, treaties", "വികസനം, മലിനീകരണം, ഊർജ്ജം, നിയമം, ഉടമ്പടി"),
        body: L(
          "**MDGs:** 8 goals, 2000–2015. **SDGs:** 17 goals, 2015–2030 (UN). SDG 4 = quality education; SDG 13 = climate action.\n\n**Anthropogenic impacts:** air (PM2.5, SO2, NOx), water (eutrophication, heavy metals), soil, noise, wastes (solid, liquid, biomedical, hazardous, e-waste). Health: COPD, Minamata (Hg), Itai-itai (Cd), fluorosis, asbestosis.\n\n**Energy:** solar, wind, hydro, geothermal, biomass, nuclear, forests as carbon sinks.\n\n**Law:** Environment (Protection) Act 1986 (post-Bhopal). **NAPCC** (2008): eight missions including National Solar Mission, Enhanced Energy Efficiency, Sustainable Habitat, Water, Sustaining Himalayan Ecosystem, Green India, Sustainable Agriculture, Strategic Knowledge on Climate Change.\n\n**ISA:** International Solar Alliance, 2015, HQ Gurugram.",
          "**MDG** 8, 2000–2015. **SDG** 17, 2015–2030. SDG 4 വിദ്യാഭ്യാസം, SDG 13 കാലാവസ്ഥ.\n\n**മലിനീകരണം** വായു/ജലം/മണ്ണ്/ശബ്ദം/മാലിന്യം. മിനമാറ്റ (Hg), ഇടായ്-ഇടായ് (Cd).\n\n**EPA 1986** ഭോപ്പാലിന് ശേഷം. **NAPCC 2008** എട്ട് മിഷൻ.\n\n**ISA 2015**, ആസ്ഥാനം ഗുഡ്ഗാവ്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Montreal Protocol is a climate treaty.", "മോൺട്രിയൽ പ്രോട്ടോക്കോൾ കാലാവസ്ഥാ ഉടമ്പടിയാണ്."),
        right: L("Montreal = ozone-depleting substances. Paris/Kyoto/UNFCCC = climate.", "മോൺട്രിയൽ = ഓസോൺ ക്ഷയിപ്പിക്കുന്ന വസ്തുക്കൾ. പാരീസ്/ക്യോട്ടോ/UNFCCC = കാലാവസ്ഥ."),
        fix: L("Ozone → Montreal 1987. Carbon/climate → Kyoto/Paris.", "ഓസോൺ → മോൺട്രിയൽ 1987. കാർബൺ → ക്യോട്ടോ/പാരീസ്."),
      },
    ],
    flash: [
      { term: L("Paris Agreement", "പാരീസ് ഉടമ്പടി"), def: L("2015, COP21, hold warming well below 2°C, pursue 1.5°C, NDCs.", "2015, COP21, 2°C-യ്ക്ക് താഴെ, 1.5°C ലക്ഷ്യം, NDC.") },
      { term: L("EPA", "EPA"), def: L("Environment (Protection) Act, 1986 — umbrella legislation.", "പരിസ്ഥിതി (സംരക്ഷണ) നിയമം, 1986 — കുട നിയമം.") },
    ],
  },
  {
    id: "p1-u10",
    paper: "p1",
    no: 10,
    title: L("Higher Education System", "ഉന്നതവിദ്യാഭ്യാസ വ്യവസ്ഥ"),
    examNote: L("5 questions. Ancient institutions + NEP 2020 + regulators names.", "5 ചോദ്യം. പുരാതന സ്ഥാപനങ്ങൾ + NEP 2020 + റെഗുലേറ്റർ പേരുകൾ."),
    jrfWhy: L(
      "NEP items are still being written into papers. This is the other six-month-update unit. JRF needs both Nalanda and HECI verticals.",
      "NEP ഇനങ്ങൾ ഇപ്പോഴും പേപ്പറിലേക്ക് എഴുതപ്പെടുന്നു. മറ്റേ ആറുമാസ-അപ്ഡേറ്റ് യൂണിറ്റ്. നാലന്തയും HECI വെർട്ടിക്കലുകളും വേണം.",
    ),
    howAsked: L(
      "Takshashila/Nalanda/Vikramashila matching, UGC/AICTE/NCTE/NAAC/NIRF, NEP 2020 features, value education, conventional vs non-conventional.",
      "തക്ഷശില/നാലന്ത/വിക്രമശില, UGC/AICTE/NCTE/NAAC/NIRF, NEP 2020, മൂല്യവിദ്യാഭ്യാസം, കൺവെൻഷണൽ vs നോൺ-കൺവെൻഷണൽ.",
    ),
    repeats: L(
      "Nalanda (Bihar, Buddhist, destroyed c. 12th c.), Takshashila (Gandhara), UGC 1956, NAAC accreditation, NIRF ranking, IGNOU as ODL flagship.",
      "നാലന്ത (ബീഹാർ, ബൗദ്ധം), തക്ഷശില (ഗന്ധാര), UGC 1956, NAAC, NIRF, IGNOU.",
    ),
    shifts: L(
      "NEP 2020: 5+3+3+4, ABC, multiple entry-exit, GER 50% by 2035, multidisciplinary, HECI with NHERC, NAC, HEGC, GEC replacing UGC/AICTE in the proposed architecture, NCrF, Indian Knowledge Systems.",
      "NEP 2020: 5+3+3+4, ABC, മൾട്ടിപ്പിൾ എൻട്രി-എക്സിറ്റ്, 2035-ൽ 50% GER, HECIയുടെ നാല് വെർട്ടിക്കൽ, NCrF, IKS.",
    ),
    method: L(
      "Two columns: Ancient (place, patron, subject strengths) and Present (body → function). Add a NEP 2020 one-pager that you rewrite from memory weekly.",
      "രണ്ട് കോളം: പുരാതനം (സ്ഥലം, രക്ഷാധികാരി, വിഷയം) ഒപ്പം ഇപ്പോൾ (ബോഡി → ഫംഗ്ഷൻ). NEP ഒരു പേജ് ആഴ്ചതോറും മനഃപാഠത്തിൽ നിന്ന് വീണ്ടും എഴുതുക.",
    ),
    sections: [
      {
        heading: L("Ancient to NEP", "പുരാതനം മുതൽ NEP വരെ"),
        body: L(
          "**Ancient:** Takshashila (present-day Pakistan; medicine, politics — Chanakya associated in tradition), Nalanda (Bihar; Buddhist mahavihara; Dharmapala etc.), Vikramashila, Valabhi, Odantapuri.\n\n**Post-independence:** UGC Act 1956, IIT/IIM, professional councils (AICTE, NCTE, NMC), NAAC (accreditation), NIRF (ranking), ODL (IGNOU, 1985), conventional vs non-conventional (open, distance, online).\n\n**NEP 2020:** school 5+3+3+4; HE multidisciplinary; 4-year UG with multiple entry-exit; Academic Bank of Credits; National Research Foundation; GER 50% by 2035; mother-tongue emphasis; Indian Knowledge Systems; proposed Higher Education Commission of India with four verticals — regulation (NHERC), accreditation (NAC), funding (HEGC), academic standards (GEC).\n\n**Value education** and **environmental education** are explicit NTA phrases — not optional extras.",
          "**പുരാതനം:** തക്ഷശില, നാലന്ത (ബീഹാർ, ബൗദ്ധ മഹാവിഹാരം), വിക്രമശില, വലഭി.\n\n**സ്വാതന്ത്ര്യാനന്തരം:** UGC 1956, AICTE, NCTE, NAAC, NIRF, IGNOU 1985.\n\n**NEP 2020:** 5+3+3+4; ബഹുവിഷയ UG; ABC; 2035-ൽ 50% GER; HECI — NHERC, NAC, HEGC, GEC.\n\n**മൂല്യവിദ്യാഭ്യാസവും പരിസ്ഥിതി വിദ്യാഭ്യാസവും** എൻടിഎയുടെ സ്പഷ്ട ഫ്രെയിസുകൾ.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("NAAC ranks universities; NIRF accredits them.", "NAAC റാങ്ക് ചെയ്യുന്നു; NIRF അക്രഡിറ്റ് ചെയ്യുന്നു."),
        right: L("NAAC accredits quality. NIRF ranks. Different jobs.", "NAAC ഗുണനിലവാരം അക്രഡിറ്റ് ചെയ്യുന്നു. NIRF റാങ്ക് ചെയ്യുന്നു."),
        fix: L("A for accreditation (NAAC). R for ranking (NIRF).", "A = അക്രഡിറ്റേഷൻ (NAAC). R = റാങ്കിംഗ് (NIRF)."),
      },
    ],
    flash: [
      { term: L("ABC", "ABC"), def: L("Academic Bank of Credits — store and transfer credits across institutions.", "അക്കാദമിക് ബാങ്ക് ഓഫ് ക്രെഡിറ്റ്സ് — സ്ഥാപനങ്ങൾക്കിടയിൽ ക്രെഡിറ്റ് സൂക്ഷിക്കുക/കൈമാറുക.") },
      { term: L("Nalanda", "നാലന്ത"), def: L("Ancient Buddhist mahavihara in Bihar; international students; destroyed c. 1193 (tradition: Bakhtiyar Khalji).", "ബീഹാറിലെ ബൗദ്ധ മഹാവിഹാരം; അന്താരാഷ്ട്ര വിദ്യാർത്ഥികൾ.") },
    ],
  },
];
