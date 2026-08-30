import type { Unit } from "@/lib/types";
import { L } from "./builder";

export const UNITS_VA: Unit[] = [
  {
    id: "va-u1",
    paper: "va",
    no: 1,
    title: L("Fundamentals of Visual Art", "ദൃശ്യകലയുടെ അടിസ്ഥാനങ്ങൾ"),
    examNote: L("Elements + principles + 2D/3D. Definition questions and ‘which principle is…’.", "എലമെന്റുകൾ + പ്രിൻസിപ്പിൾസ് + 2D/3D. നിർവചനവും ‘ഏത് തത്വം’ ചോദ്യങ്ങളും."),
    jrfWhy: L(
      "This is the grammar of Paper II. JRF items nest two ideas: e.g. ‘foreshortening is a device of ______ that creates ______’.",
      "പേപ്പർ II-ന്റെ വ്യാകരണം. ജെആർഎഫ് ഇനങ്ങൾ രണ്ട് ആശയം കൂട്ടിയിണക്കും: ഉദാ. ഫോർഷോർട്ടനിംഗ് ഏത് തത്വത്തിന്റെ ഉപകരണം.",
    ),
    howAsked: L(
      "Identify element vs principle, complementary colours, linear vs aerial perspective, positive/negative space, gestalt grouping sometimes leaks in from Unit X.",
      "എലമെന്റ് vs പ്രിൻസിപ്പിൾ, കോംപ്ലിമെന്ററി കളർ, ലീനിയർ vs എരിയൽ പെർസ്പെക്ടീവ്, പോസിറ്റീവ്/നെഗറ്റീവ് സ്പേസ്.",
    ),
    repeats: L(
      "Line, shape, form, space, colour, texture, tone, perspective. Principles: proportion, unity, harmony, rhythm, contrast, balance, emphasis, foreshortening.",
      "രേഖ, ആകൃതി, രൂപം, സ്ഥലം, നിറം, ടെക്സ്ചർ, ടോൺ, പെർസ്പെക്ടീവ്. തത്വങ്ങൾ: അനുപാതം, ഐക്യം, ഹാർമണി, റിഥം, കോൺട്രാസ്റ്റ്, ബാലൻസ്, എംഫസിസ്, ഫോർഷോർട്ടനിംഗ്.",
    ),
    shifts: L(
      "More questions on conceptual/environmental aspects — installation space, site-specificity — using the same vocabulary of space and emphasis.",
      "ഇൻസ്റ്റലേഷൻ സ്പേസ്, സൈറ്റ്-സ്പെസിഫിസിറ്റി എന്നിവയിൽ അതേ പദാവലി ഉപയോഗിച്ചുള്ള ചോദ്യങ്ങൾ കൂടുന്നു.",
    ),
    method: L(
      "Two lists only — elements (what is there) vs principles (how it is organised). For each principle, name one painting you can see in your mind (e.g. balance — Raja Ravi Varma’s grouped figures; contrast — Caravaggio tenebrism).",
      "രണ്ട് ലിസ്റ്റ് മാത്രം — എലമെന്റ് vs പ്രിൻസിപ്പിൾ. ഓരോ തത്വത്തിനും മനസ്സിൽ ഒരു ചിത്രം (ബാലൻസ് — രവി വർമ്മ; കോൺട്രാസ്റ്റ് — കാരവാജിയോ).",
    ),
    sections: [
      {
        heading: L("Elements — the ingredients", "എലമെന്റുകൾ — ചേരുവകൾ"),
        body: L(
          "**Line** creates edge, direction, emotion (gesture vs contour). **Shape** is 2D enclosure; **form** is 3D (cube, sphere — mass). **Space:** positive (figure) and negative (ground); shallow vs deep. **Colour:** hue, value, chroma; primary/secondary; complementary (R–G, B–O, Y–V in painter’s subtractive mixing). **Texture:** actual vs implied. **Tonal values:** the grey scale that builds volume. **Perspective:** linear (vanishing point) and aerial/atmospheric (value and chroma recede).",
          "**രേഖ** അരിക്, ദിശ, വികാരം. **ആകൃതി** 2D; **രൂപം** 3D. **സ്ഥലം:** പോസിറ്റീവ്/നെഗറ്റീവ്. **നിറം:** ഹ്യൂ, വാല്യൂ, ക്രോമ; കോംപ്ലിമെന്ററി. **ടെക്സ്ചർ** യഥാർഥവും സൂചിതവും. **ടോൺ** വോളിയം കട്ടിയാക്കുന്നു. **പെർസ്പെക്ടീവ്:** ലീനിയർ, എരിയൽ.",
        ),
      },
      {
        heading: L("Principles — the cooking", "പ്രിൻസിപ്പിൾസ് — സംഘാടനം"),
        body: L(
          "**Proportion** (including classical canons and exaggeration). **Unity** and **harmony** (belonging together). **Rhythm** (repetition with variation). **Contrast** (value, hue, scale). **Balance:** symmetrical, asymmetrical, radial. **Emphasis / focal point. Foreshortening** is perspective applied to the figure — a principle-device, not a separate ‘element’. **2D representation** (painting, print, drawing) vs **3D** (sculpture, installation). Environmental / conceptual / perceptual aspects: how site, idea and seeing itself become materials.",
          "**അനുപാതം, ഐക്യം, ഹാർമണി, റിഥം, കോൺട്രാസ്റ്റ്, ബാലൻസ്, എംഫസിസ്.** **ഫോർഷോർട്ടനിംഗ്** രൂപത്തിന് ബാധകമാക്കിയ പെർസ്പെക്ടീവ് — എലമെന്റല്ല. 2D vs 3D. പരിസര/കൺസെപ്ച്വൽ/പെർസപ്ച്വൽ വശങ്ങൾ: സ്ഥലം, ആശയം, കാഴ്ച തന്നെ മാധ്യമമാകുന്നു.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Calling colour a principle of composition.", "നിറത്തെ കമ്പോസിഷൻ തത്വമായി വിളിക്കുക."),
        right: L("Colour is an element. Contrast of colour is a principle.", "നിറം എലമെന്റ്. നിറത്തിന്റെ കോൺട്രാസ്റ്റ് പ്രിൻസിപ്പിൾ."),
        fix: L("Ask: is it a thing I can point to, or a relationship? Thing = element.", "ചൂണ്ടിക്കാണിക്കാവുന്ന വസ്തുവോ ബന്ധമോ? വസ്തു = എലമെന്റ്."),
      },
    ],
    flash: [
      { term: L("Aerial perspective", "എരിയൽ പെർസ്പെക്ടീവ്"), def: L("Distant forms lose contrast and chroma, shift toward atmospheric blue-grey.", "ദൂരെയുള്ള രൂപങ്ങൾ കോൺട്രാസ്റ്റും ക്രോമയും നഷ്ടപ്പെടുന്നു.") },
      { term: L("Foreshortening", "ഫോർഷോർട്ടനിംഗ്"), def: L("Depicting an object receding in depth by compressing its length.", "ആഴത്തിലേക്ക് പോകുന്ന വസ്തുവിന്റെ നീളം ചുരുക്കി ചിത്രീകരിക്കൽ.") },
    ],
  },
  {
    id: "va-u2",
    paper: "va",
    no: 2,
    title: L("Interrelationship of the Arts", "കലകളുടെ പരസ്പരബന്ധം"),
    examNote: L("Shorter unit. Comparative and example-based. Easy if you keep named cases.", "ചെറിയ യൂണിറ്റ്. താരതമ്യവും ഉദാഹരണവും. പേരുള്ള കേസുകൾ ഉണ്ടെങ്കിൽ എളുപ്പം."),
    jrfWhy: L(
      "JRF likes specific crossovers: Tagore (poet-painter), Satyajit Ray (graphic + cinema), Ragamala (music–painting), Natyashastra (rasa across arts).",
      "ജെആർഎഫ് കൃത്യമായ ക്രോസ്ഓവർ ഇഷ്ടപ്പെടുന്നു: താഗോർ, സത്യജിത് റേ, രാഗമാല, നാട്യശാസ്ത്രം.",
    ),
    howAsked: L(
      "Which art form shares X with painting; cinema montage vs collage; literature ekphrasis; performing arts and visual design of stage.",
      "ഏത് കലാരൂപം ചിത്രവുമായി X പങ്കിടുന്നു; സിനിമ മോണ്ടാജ് vs കൊളാഷ്; സാഹിത്യ ഏക്ഫ്രാസിസ്.",
    ),
    repeats: L(
      "Rasa theory as shared Indian aesthetic; Ragamala; Ajanta as painting–architecture–sculpture ensemble; Bauhaus multidisciplinary.",
      "രസം പങ്കിട്ട സൗന്ദര്യശാസ്ത്രം; രാഗമാല; അജന്ത സമന്വയം; ബോഹൗസ്.",
    ),
    shifts: L(
      "Video art, performance, graphic novels, and film still as contemporary ‘inter-art’ examples.",
      "വീഡിയോ ആർട്ട്, പെർഫോമൻസ്, ഗ്രാഫിക് നോവൽ, ഫിലിം സ്റ്റിൽ — സമകാലിക ഇന്റർ-ആർട്ട്.",
    ),
    method: L(
      "Build six named bridges (music, dance, theatre, cinema, literature, architecture) with one Indian and one Western example each.",
      "ആറ് പാലം: സംഗീതം, നൃത്തം, തിയേറ്റർ, സിനിമ, സാഹിത്യം, വാസ്തുവിദ്യ — ഓരോന്നിനും ഒരു ഇന്ത്യൻ, ഒരു പാശ്ചാത്യ ഉദാഹരണം.",
    ),
    sections: [
      {
        heading: L("Visual art among the sister arts", "സഹോദര കലകൾക്കിടയിൽ ദൃശ്യകല"),
        body: L(
          "Painting, sculpture, print, design and architecture share **space, time, narrative and rasa** with performing arts, cinema and literature. **Ragamala** paintings visualise ragas. **Kathakali** makeup is graphic design on the face. **Satyajit Ray** designed posters, type, and composed; his frames are painterly. **Eisenstein’s montage** is to cinema what **collage** is to modern painting. **Ekphrasis** is literature describing an artwork (Keats’s urn; Sanskrit *chitra-kavya*). **Ajanta** and **Ellora** are not ‘just painting’ or ‘just cave’ — they are total visual programmes. Bauhaus collapsed craft, design, theatre and fine art into one school.",
          "ചിത്രം, ശില്പം, പ്രിന്റ്, ഡിസൈൻ, വാസ്തുവിദ്യ **സ്ഥലം, കാലം, ആഖ്യാനം, രസം** പെർഫോമിംഗ് ആർട്ട്, സിനിമ, സാഹിത്യവുമായി പങ്കിടുന്നു. **രാഗമാല**, **കഥകളി** മേക്കപ്പ്, **സത്യജിത് റേ**യുടെ ഫ്രെയിമുകൾ, **ഐസൻസ്റ്റൈൻ മോണ്ടാജ്** vs **കൊളാഷ്**, **ഏക്ഫ്രാസിസ്**, **അജന്ത–എല്ലോറ** സമഗ്ര ദൃശ്യപരിപാടി, **ബോഹൗസ്**.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Treating cinema as unrelated to visual art because it ‘moves’.", "സിനിമ ‘ചലിക്കുന്നു’ എന്നതിനാൽ ദൃശ്യകലയല്ലെന്ന് കരുതുക."),
        right: L("Syllabus names cinema explicitly as a sister mode of creative expression.", "സിലബസ് സിനിമയെ സഹോദര സൃഷ്ടി മാധ്യമമായി പേരെടുത്ത് പറയുന്നു."),
        fix: L("If an option links mise-en-scène to composition, it is in syllabus.", "mise-en-scène കമ്പോസിഷനുമായി ബന്ധിപ്പിച്ചാൽ അത് സിലബസിലാണ്."),
      },
    ],
    flash: [
      { term: L("Ragamala", "രാഗമാല"), def: L("Miniature sets visualising musical ragas, often Rajasthani/Pahari/Deccani.", "രാഗങ്ങളെ ദൃശ്യമാക്കുന്ന മിനിയേച്ചർ സെറ്റുകൾ.") },
    ],
  },
  {
    id: "va-u3",
    paper: "va",
    no: 3,
    title: L("Traditional Materials & Techniques", "പരമ്പരാഗത മാധ്യമങ്ങളും സാങ്കേതികതയും"),
    examNote: L("Process vocabulary. High scoring if you never mix print families.", "പ്രക്രിയാ പദാവലി. പ്രിന്റ് കുടുംബങ്ങൾ കൂട്ടിക്കലർത്തിയില്ലെങ്കിൽ ഹൈ സ്കോർ."),
    jrfWhy: L(
      "NTA loves: wasli, buon fresco vs fresco secco, lost-wax (cire perdue), intaglio vs relief, impasto vs glaze. These are JRF bread-and-butter.",
      "വാസ്ലി, ബുവോൺ ഫ്രെസ്കോ vs സെക്കോ, സിരെ പെർദ്യൂ, ഇന്റാഗ്ലിയോ vs റിലീഫ്, ഇമ്പാസ്റ്റോ vs ഗ്ലേസ് — ജെആർഎഫ് അപ്പവും മധുവും.",
    ),
    howAsked: L(
      "Which process for bronze Chola; ground for miniature; etching vs woodcut; true fresco painting into wet lime.",
      "ചോള വെങ്കലത്തിന് ഏത് പ്രക്രിയ; മിനിയേച്ചർ ഗ്രൗണ്ട്; എച്ചിംഗ് vs വുഡ്കട്ട്; യഥാർഥ ഫ്രെസ്കോ.",
    ),
    repeats: L(
      "Wasli; tempera; fresco; encaustic (occasionally); carving vs modelling vs casting; relief (woodcut, linocut) vs intaglio (etching, engraving, drypoint, aquatint).",
      "വാസ്ലി; ടെമ്പറ; ഫ്രെസ്കോ; കൊത്തൽ vs മോഡലിംഗ് vs കാസ്റ്റിംഗ്; റിലീഫ് vs ഇന്റാഗ്ലിയോ.",
    ),
    shifts: L(
      "Mural ground preparation and conservation vocabulary (arriccio, intonaco) appear in higher-pitch items.",
      "മ്യൂറൽ ഗ്രൗണ്ട് (അരിച്ചോ, ഇന്റോനാകോ), കൺസർവേഷൻ പദങ്ങൾ ഉയർന്ന ഇനങ്ങളിൽ.",
    ),
    method: L(
      "One family tree of printmaking. One cooking recipe each for fresco, miniature wasli, and lost-wax. Recite materials, not essays.",
      "പ്രിന്റ്‌മേക്കിംഗിന്റെ കുടുംബവൃക്ഷം. ഫ്രെസ്കോ, വാസ്ലി, ലോസ്റ്റ്-വാക്സ് — ഓരോന്നിനും ഒരു റെസിപ്പി.",
    ),
    sections: [
      {
        heading: L("Sculpture, colour, print, mural, miniature", "ശില്പം, നിറം, പ്രിന്റ്, മ്യൂറൽ, മിനിയേച്ചർ"),
        body: L(
          "**Carving** (subtractive: stone, wood). **Modelling** (additive: clay). **Casting:** lost-wax / *cire perdue* — Chola bronzes. Hollow casting allows scale.\n\n**Pigment handling:** **impasto** (thick, loaded brush, physical ridge) vs **glazing** (thin transparent layers over an underpainting — typical oil). Tempera (egg) is opaque, quick, linear. Watercolour is transparent, paper-grounded.\n\n**Prints:** **Relief** — matrix’s raised surface inks (woodcut, wood engraving, linocut). **Intaglio** — ink sits in bitten/incised grooves (engraving, etching, drypoint, aquatint, mezzotint). **Planographic:** lithography. **Stencil:** screenprint.\n\n**Fresco:** *buon fresco* on wet intonaco (chemical bond); *fresco secco* on dry plaster (weaker). **Wasli:** layered, burnished paper laminate for Indian miniatures.",
          "**കൊത്തൽ** കുറയ്ക്കൽ; **മോഡലിംഗ്** ചേർക്കൽ; **കാസ്റ്റിംഗ്** സിരെ പെർദ്യൂ — ചോള വെങ്കലം.\n\n**ഇമ്പാസ്റ്റോ** കട്ടി; **ഗ്ലേസ്** നേർത്ത സുതാര്യ അടുക്ക്. ടെമ്പറ മുട്ട; വാട്ടർകളർ സുതാര്യം.\n\n**റിലീഫ്** ഉയർന്ന പ്രതലം മഷി (വുഡ്കട്ട്). **ഇന്റാഗ്ലിയോ** പോട്ടുകളിൽ മഷി (എച്ചിംഗ്, എൻഗ്രേവിംഗ്). ലിത്തോ പ്ലാനോഗ്രാഫിക്.\n\n**ബുവോൺ ഫ്രെസ്കോ** നനഞ്ഞ ഇന്റോനാകോ. **വാസ്ലി** മിനിയേച്ചറിനുള്ള പാളിയിട്ട് തേച്ച കടലാസ്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Etching is a relief process because the plate is ‘cut’.", "പ്ലേറ്റ് ‘മുറിക്കുന്നു’ എന്നതിനാൽ എച്ചിംഗ് റിലീഫ്."),
        right: L("Etching is intaglio: acid bites lines; ink is wiped into them; paper pulls ink out.", "എച്ചിംഗ് ഇന്റാഗ്ലിയോ: ആസിഡ് വരി കടിക്കുന്നു; മഷി തുടച്ച് പോട്ടിലിടുന്നു."),
        fix: L("Relief = high parts print. Intaglio = low parts print.", "റിലീഫ് = ഉയർന്നത് അച്ചടിക്കും. ഇന്റാഗ്ലിയോ = താഴ്ന്നത് അച്ചടിക്കും."),
      },
    ],
    flash: [
      { term: L("Wasli", "വാസ്ലി"), def: L("Polished laminated paper ground for miniature painting.", "മിനിയേച്ചറിനുള്ള തിളക്കമുള്ള പാളിയിട്ട കടലാസ്.") },
      { term: L("Cire perdue", "സിരെ പെർദ്യൂ"), def: L("Lost-wax casting — wax model melted out, metal poured in.", "മെഴുക് മാതൃക ഉരുക്കി ലോഹം ഒഴിക്കുന്ന രീതി.") },
    ],
  },
  {
    id: "va-u4",
    paper: "va",
    no: 4,
    title: L("Modern Techniques & Digital Practices", "ആധുനിക സാങ്കേതികതയും ഡിജിറ്റൽ പ്രാക്ടീസും"),
    examNote: L("Installation, CAD, vector/raster, trompe-l’œil, multimedia. Growing unit.", "ഇൻസ്റ്റലേഷൻ, CAD, വെക്ടർ/റാസ്റ്റർ, ട്രോമ്പ്-ലോയ്, മൾട്ടിമീഡിയ. വളരുന്ന യൂണിറ്റ്."),
    jrfWhy: L(
      "Unit VIII contemporary Indian practice + this unit = where 21st-century questions live. JRF expects vector vs raster, not just ‘computer art’.",
      "യൂണിറ്റ് VIII-ഉം ഇതും 21-ാം നൂറ്റാണ്ട് ചോദ്യങ്ങളുടെ വീട്. ‘കമ്പ്യൂട്ടർ ആർട്ട്’ മതിയാകില്ല — വെക്ടർ vs റാസ്റ്റർ വേണം.",
    ),
    howAsked: L(
      "Vector vs raster file behaviour; installation vs sculpture; giclée; 3D printing; trompe-l’œil as illusionism; video/new media artists.",
      "വെക്ടർ vs റാസ്റ്റർ; ഇൻസ്റ്റലേഷൻ vs ശില്പം; ജിക്ലേ; 3D പ്രിന്റ്; ട്രോമ്പ്-ലോയ്; വീഡിയോ ആർട്ടിസ്റ്റുകൾ.",
    ),
    repeats: L(
      "Vector = mathematical paths, infinite scale (logo). Raster = pixels, resolution-dependent (photo). Installation is site-responsive, often ephemeral.",
      "വെക്ടർ = ഗണിത പാത, അനന്ത സ്കെയിൽ. റാസ്റ്റർ = പിക്സൽ, റെസല്യൂഷൻ ആശ്രിതം. ഇൻസ്റ്റലേഷൻ സൈറ്റ്-റെസ്പോൺസീവ്.",
    ),
    shifts: L(
      "AI image tools, NFTs (as a historical blip), AR filters, and Indian new-media names (e.g. Raqs Media Collective) enter predicted lists.",
      "AI ഇമേജ് ടൂൾ, NFT, AR, ഇന്ത്യൻ ന്യൂ-മീഡിയ (Raqs Media Collective) പ്രെഡിക്ടഡ് ലിസ്റ്റിൽ.",
    ),
    method: L(
      "Define five words so you could teach them: installation, assemblage, video art, vector, trompe-l’œil. Add one artist to each.",
      "അഞ്ച് വാക്ക് പഠിപ്പിക്കാൻ കഴിയുന്ന വിധം നിർവചിക്കുക: ഇൻസ്റ്റലേഷൻ, അസംബ്ലേജ്, വീഡിയോ ആർട്ട്, വെക്ടർ, ട്രോമ്പ്-ലോയ്. ഓരോന്നിനും ഒരു കലാകാരൻ.",
    ),
    sections: [
      {
        heading: L("From studio expansion to the file", "സ്റ്റുഡിയോ വിപുലീകരണം മുതൽ ഫയൽ വരെ"),
        body: L(
          "**Installation** occupies and redefines a site; the viewer walks in. **Assemblage** composes found objects. **Multi-colour print** (offset, screen, photopolymer). **CAD:** vector (Illustrator, SVG, Bezier) vs raster (Photoshop, TIFF, JPEG, PPI). **Multimedia / digital:** video, sound, interactivity, projection mapping. **Trompe-l’œil:** ‘deceive the eye’ — hyper-illusion of depth on a flat plane; Baroque ceilings to contemporary hyperrealism. 3D printing returns digital form to sculpture.",
          "**ഇൻസ്റ്റലേഷൻ** സ്ഥലത്തെ പുനർനിർവചിക്കുന്നു; കാഴ്ചക്കാരൻ അകത്ത് നടക്കുന്നു. **അസംബ്ലേജ്** കണ്ടെത്തിയ വസ്തുക്കൾ. **മൾട്ടി-കളർ പ്രിന്റ്.** **CAD:** വെക്ടർ vs റാസ്റ്റർ. **മൾട്ടിമീഡിയ.** **ട്രോമ്പ്-ലോയ്** കണ്ണിനെ പറ്റിക്കുന്ന ആഴം. 3D പ്രിന്റ് ഡിജിറ്റലിനെ ശില്പത്തിലേക്ക് തിരികെ.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Enlarging a JPEG logo is the same as enlarging an SVG logo.", "JPEG ലോഗോ വലുതാക്കുന്നത് SVG പോലെയാണ്."),
        right: L("JPEG is raster — it pixelates. SVG is vector — it stays sharp.", "JPEG റാസ്റ്റർ — പിക്സലേറ്റ്. SVG വെക്ടർ — മൂർച്ച നിൽക്കും."),
        fix: L("Photos = raster. Logos/type = vector whenever possible.", "ഫോട്ടോ = റാസ്റ്റർ. ലോഗോ/ടൈപ്പ് = വെക്ടർ."),
      },
    ],
    flash: [
      { term: L("Trompe-l’œil", "ട്രോമ്പ്-ലോയ്"), def: L("Illusionistic painting that ‘fools the eye’ into reading depth/objecthood.", "ആഴവും വസ്തുത്വവും കണ്ണിനെ പറ്റിക്കുന്ന ചിത്രീകരണം.") },
    ],
  },
  {
    id: "va-u5",
    paper: "va",
    no: 5,
    title: L("Indian & Western Aesthetics", "ഇന്ത്യൻ & പാശ്ചാത്യ സൗന്ദര്യശാസ്ത്രം"),
    examNote: L("Theory unit. JRF loves rasa-dhvani and Clive Bell / Kant one-liners.", "സിദ്ധാന്ത യൂണിറ്റ്. രസ-ധ്വനി, ക്ലൈവ് ബെൽ, കാന്റ്."),
    jrfWhy: L(
      "This is the conceptual spine that Unit X (methods) will reuse. Master rasa numbers and the Western ‘beauty / sublime / significant form’ triangle.",
      "യൂണിറ്റ് X വീണ്ടും ഉപയോഗിക്കുന്ന നട്ടെല്ല്. രസങ്ങളുടെ എണ്ണവും പാശ്ചാത്യ ട്രയാംഗിളും (ഭംഗി / സബ്ലൈം / സിഗ്നിഫിക്കന്റ് ഫോം) മാസ്റ്റർ ചെയ്യുക.",
    ),
    howAsked: L(
      "Who wrote Natyashastra; 8 vs 9 rasas; dhvani (Anandavardhana); Vakrokti (Kuntaka); Kant’s disinterested judgement; Bell’s significant form; Tolstoy’s infection theory.",
      "നാട്യശാസ്ത്രം ആര്; 8 vs 9 രസം; ധ്വനി (ആനന്ദവർധനൻ); വക്രോക്തി (കുന്തകൻ); കാന്റ്; ക്ലൈവ് ബെൽ; ടോൾസ്റ്റോയ്.",
    ),
    repeats: L(
      "Bharata’s eight rasas + Abhinavagupta’s śānta as ninth. Rasa-sutra: vibhava, anubhava, vyabhicharibhava → rasa. Plato (mimesis, suspicion of art) vs Aristotle (catharsis).",
      "ഭരതന്റെ എട്ട് രസം + അഭിനവഗുപ്തന്റെ ശാന്തം ഒമ്പതാമത്. രസസൂത്രം. പ്ലേറ്റോ vs അരിസ്റ്റോട്ടിൽ (കാതാർസിസ്).",
    ),
    shifts: L(
      "Feminist aesthetics, rasa in contemporary criticism, and Coomaraswamy’s reading of Indian art as yoga of form.",
      "ഫെമിനിസ്റ്റ് സൗന്ദര്യശാസ്ത്രം, സമകാലിക വിമർശനത്തിൽ രസം, കുമാരസ്വാമിയുടെ യോഗ-ആയ-രൂപം.",
    ),
    method: L(
      "Two flash decks: Indian (text–author–keyword) and Western (thinker–keyword). Do not study as philosophy essays; NTA asks the keyword.",
      "രണ്ട് ഫ്ലാഷ് ഡെക്ക്: ഇന്ത്യൻ (ഗ്രന്ഥം–ഗ്രന്ഥകാരൻ–കീവേഡ്), പാശ്ചാത്യ (ചിന്തകൻ–കീവേഡ്). ഉപന്യാസമല്ല, കീവേഡ്.",
    ),
    sections: [
      {
        heading: L("Rasa to significant form", "രസം മുതൽ സിഗ്നിഫിക്കന്റ് ഫോം വരെ"),
        body: L(
          "**Indian:** *Natyashastra* (Bharata) — eight rasas (śṛṅgāra, hāsya, karuṇa, raudra, vīra, bhayānaka, bībhatsa, adbhuta). **Abhinavagupta** adds **śānta**. Mechanism: *vibhāva* (determinants), *anubhāva* (consequents), *vyabhicāri-bhāva* (transitory) combine as *sthāyi-bhāva* tasted as rasa. **Dhvani** (Anandavardhana, *Dhvanyaloka*): suggestion is the soul of poetry. **Vakrokti** (Kuntaka): oblique expression. **Aucitya** (Ksemendra): propriety. **Riti, Alamkara** schools.\n\n**Western:** Plato — art as copy of a copy. Aristotle — mimesis and **catharsis**. **Kant** — judgement of beauty is disinterested; the **sublime** overwhelms. **Hegel** — art as unfolding of Spirit (symbolic/classical/romantic). **Croce** — intuition-expression. **Tolstoy** — art as infection of feeling. **Clive Bell** — **significant form**. **Collingwood** — art as expression, not craft. Indian 20th-c: **Coomaraswamy**, **Stella Kramrisch**, **Rabindranath** on art and freedom.",
          "**നാട്യശാസ്ത്രം (ഭരതൻ)** എട്ട് രസം; **അഭിനവഗുപ്തൻ ശാന്തം** ചേർക്കുന്നു. വിഭാവ, അനുഭാവ, വ്യഭിചാരി → സ്ഥായി → രസം. **ധ്വനി** ആനന്ദവർധനൻ. **വക്രോക്തി** കുന്തകൻ. **ഔചിത്യം** ക്ഷേമേന്ദ്രൻ.\n\n**പ്ലേറ്റോ** പകർപ്പ്; **അരിസ്റ്റോട്ടിൽ** കാതാർസിസ്; **കാന്റ്** നിരപേക്ഷ ഭംഗി / സബ്ലൈം; **ഹെഗൽ** സ്പിരിറ്റ്; **ക്രോചെ** ഇൻട്യൂഷൻ; **ടോൾസ്റ്റോയ്** ഇൻഫെക്ഷൻ; **ക്ലൈവ് ബെൽ** സിഗ്നിഫിക്കന്റ് ഫോം. **കുമാരസ്വാമി, ക്രാമ്രിഷ്.**",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Nine rasas in the original Natyashastra list.", "യഥാർഥ നാട്യശാസ്ത്ര ലിസ്റ്റിൽ ഒമ്പത് രസം."),
        right: L("Bharata lists eight; śānta is Abhinavagupta’s influential ninth.", "ഭരതൻ എട്ട്; ശാന്തം അഭിനവഗുപ്തന്റെ ഒമ്പതാമത്."),
        fix: L("If the question says ‘Bharata’, answer eight. If ‘classical Indian tradition / Abhinava’, nine is defensible — read the stem.", "ഭരതൻ എന്ന് കണ്ടാൽ എട്ട്. അഭിനവ/പാരമ്പര്യം എന്ന് കണ്ടാൽ ഒമ്പത് — സ്റ്റെം വായിക്കുക."),
      },
    ],
    flash: [
      { term: L("Significant form", "സിഗ്നിഫിക്കന്റ് ഫോം"), def: L("Clive Bell: relations of lines and colours that provoke the aesthetic emotion.", "ക്ലൈവ് ബെൽ: സൗന്ദര്യവികാരം ഉണർത്തുന്ന രേഖ-നിറ ബന്ധങ്ങൾ.") },
      { term: L("Dhvani", "ധ്വനി"), def: L("Anandavardhana: suggested meaning, beyond abhidha and lakshana.", "ആനന്ദവർധനൻ: അഭിധയ്ക്കും ലക്ഷണയ്ക്കും അപ്പുറമുള്ള ധ്വനിതാർഥം.") },
    ],
  },
  {
    id: "va-u6",
    paper: "va",
    no: 6,
    title: L("Western Art — Prehistory to Postmodern", "പാശ്ചാത്യ കല — പ്രാഗൈതിഹാസം മുതൽ പോസ്റ്റ്‌മോഡേൺ"),
    examNote: L("Chronology + movement + one canonical work. The longest memory unit.", "കാലക്രമം + പ്രസ്ഥാനം + ഒരു കാനോനിക കൃതി. ഏറ്റവും വലിയ മെമ്മറി യൂണിറ്റ്."),
    jrfWhy: L(
      "JRF matching lists pair ‘Les Demoiselles d’Avignon — Cubism — 1907’. Dates ±5 years and the founding manifesto are enough.",
      "ജെആർഎഫ് മാച്ചിംഗ്: ലെ ഡെമോയ്സെൽ ദാവിനോൺ — ക്യൂബിസം — 1907. ±5 വർഷവും മാനിഫെസ്റ്റോയും മതി.",
    ),
    howAsked: L(
      "Identify movement from a description; sequence movements; match artist–work; postmodern vs modern features.",
      "വിവരണത്തിൽ നിന്ന് പ്രസ്ഥാനം; ക്രമം; കലാകാരൻ–കൃതി; പോസ്റ്റ്‌മോഡേൺ vs മോഡേൺ.",
    ),
    repeats: L(
      "Impressionism 1874 Monet; Post-Impression Cézanne/Van Gogh/Gauguin/Seurat; Cubism Picasso/Braque; Dada 1916; Surrealism 1924 Breton; Abstract Expressionism Pollock; Pop Warhol; Minimalism; Conceptualism.",
      "ഇംപ്രഷനിസം 1874 മോനെ; പോസ്റ്റ്-ഇംപ്രഷൻ; ക്യൂബിസം; ഡാഡ 1916; സർറിയലിസം 1924; അബ്സ്ട്രാക്റ്റ് എക്സ്പ്രഷനിസം; പോപ്പ്; മിനിമൽ; കൺസെപ്ച്വൽ.",
    ),
    shifts: L(
      "More postmodern: Feminism (Chicago, Guerrilla Girls), Land art (Smithson), Arte Povera, performance/Happenings, identity politics.",
      "പോസ്റ്റ്‌മോഡേൺ കൂടുതൽ: ഫെമിനിസം, ലാൻഡ് ആർട്ട്, ആർട്ടെ പോവേര, ഹാപ്പനിംഗ്, ഐഡന്റിറ്റി.",
    ),
    method: L(
      "A single timeline strip on one page. For each movement: year, city, 2 artists, 1 work, 1 formal trait. Review by covering the trait column and reciting.",
      "ഒരു പേജ് ടൈംലൈൻ. ഓരോ പ്രസ്ഥാനത്തിനും: വർഷം, നഗരം, 2 കലാകാരൻ, 1 കൃതി, 1 ഫോർമൽ ലക്ഷണം.",
    ),
    sections: [
      {
        heading: L("A working chronology", "ഉപയോഗിക്കാവുന്ന കാലക്രമം"),
        body: L(
          "**Prehistoric:** Lascaux, Altamira — contour, twisted perspective. **Egypt:** canon, frontalism. **Aegean / Greece / Rome:** kouros to contrapposto to Hellenistic pathos; Roman portrait and arch.\n\n**Early Christian / Byzantine:** icon, gold ground, Hagia Sophia mosaics. **Romanesque / Gothic:** tympanum, stained glass, pointed arch.\n\n**Renaissance:** Giotto → Masaccio (perspective) → Leonardo, Michelangelo, Raphael (High); Venice colour (Titian). **Mannerism:** elongated, *figura serpentinata*. **Baroque:** Caravaggio tenebrism, Bernini, Rubens. **Rococo** then **Neoclassicism** (David) and **Romanticism** (Goya, Delacroix, Friedrich).\n\n**Modern:** Realism (Courbet) → Impressionism → Post-Impression → Fauvism (Matisse) → Expressionism (Die Brücke, Der Blaue Reiter) → Cubism → Futurism → Constructivism → Dada → Surrealism → Abstract Expressionism → Pop / Op → Minimal, Conceptual, Fluxus, Arte Povera, Land art, Feminist, Performance, Installation, Graffiti, Neo-figuration.",
          "**പ്രാഗൈതിഹാസം** ലാസ്കോ. **ഈജിപ്ത്** ഫ്രണ്ടലിസം. **ഗ്രീസ്/റോം** കോൺട്രാപ്പോസ്റ്റോ.\n\n**ബൈസാന്റൈൻ** ഐക്കൺ. **ഗോത്തിക്** പോയിന്റഡ് ആർച്ച്. **റിനൈസൻസ്** മസാച്ചോ പെർസ്പെക്ടീവ്; ലിയോനാർഡോ, മൈക്കൽആഞ്ചലോ, റാഫേൽ. **മാനറിസം. ബറോക്ക്** കാരവാജിയോ. **നിയോക്ലാസിക് / റൊമാന്റിക്.**\n\n**ആധുനികം:** റിയലിസം → ഇംപ്രഷൻ → പോസ്റ്റ്-ഇംപ്രഷൻ → ഫോവ് → എക്സ്പ്രഷൻ → ക്യൂബിസം → ഫ്യൂച്ചറിസം → ഡാഡ → സർറിയൽ → അബ്സ്ട്രാക്റ്റ് എക്സ്പ്രഷൻ → പോപ്പ് → മിനിമൽ/കൺസെപ്ച്വൽ.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Dating Cubism to the 1920s because Picasso lived long.", "പിക്കാസോ ദീർഘായുസ്സായതിനാൽ ക്യൂബിസം 1920കൾ."),
        right: L("Analytic Cubism c. 1907–12; *Les Demoiselles d’Avignon* 1907.", "അനലിറ്റിക് ക്യൂബിസം c. 1907–12; ലെ ഡെമോയ്സെൽ 1907."),
        fix: L("Anchor: 1907 Demoiselles, 1916 Dada Zurich, 1924 Surrealist manifesto.", "1907 ഡെമോയ്സെൽ, 1916 ഡാഡ സൂറിച്ച്, 1924 സർറിയലിസ്റ്റ് മാനിഫെസ്റ്റോ."),
      },
    ],
    flash: [
      { term: L("Impressionism", "ഇംപ്രഷനിസം"), def: L("1874 Paris show; Monet’s *Impression, Sunrise*; optical colour, modern life.", "1874 പാരീസ്; മോനെയുടെ ഇംപ്രഷൻ സൺറൈസ്; ഓപ്റ്റിക്കൽ കളർ.") },
      { term: L("Dada", "ഡാഡ"), def: L("c. 1916 Zurich (Cabaret Voltaire); anti-art, chance, ready-made (Duchamp).", "c. 1916 സൂറിച്ച്; ആന്റി-ആർട്ട്, ചാൻസ്, റെഡിമെയ്ഡ്.") },
    ],
  },
  {
    id: "va-u7",
    paper: "va",
    no: 7,
    title: L("Indian Art to the 19th Century", "19-ാം നൂറ്റാണ്ട് വരെയുള്ള ഇന്ത്യൻ കല"),
    examNote: L("Indus to Company painting. Architecture + sculpture + mural + miniature.", "സിന്ധു മുതൽ കമ്പനി ചിത്രം വരെ. വാസ്തു + ശില്പം + മ്യൂറൽ + മിനിയേച്ചർ."),
    jrfWhy: L(
      "Highest density of factual MCQs in Paper II. JRF is won by not mixing Mathura with Gandhara, or Kangra with Basohli.",
      "പേപ്പർ II-ലെ ഏറ്റവും സാന്ദ്രമായ വസ്തുതാ എംസിക്യു. മഥുര-ഗന്ധാര, കാംഗ്ര-ബസോഹ്ലി കൂട്ടിക്കലർത്താതിരുന്നാൽ ജെആർഎഫ്.",
    ),
    howAsked: L(
      "Stupa parts, Nagara vs Dravida vs Vesara, Gupta ‘classical’ traits, Ajanta cave numbers/period, Mughal emperors as patrons, school-style matching.",
      "സ്തൂപ ഭാഗങ്ങൾ, നാഗര/ദ്രാവിഡ/വേസര, ഗുപ്ത ലക്ഷണം, അജന്ത, മുഗൾ രക്ഷാധികാരി, സ്കൂൾ-ശൈലി.",
    ),
    repeats: L(
      "Lion Capital Sarnath; Didarganj Yakshi; Gandhara drapery vs Mathura redness; Ajanta late 5th c. Vakataka; Khajuraho Chandela; Konark Ganga; Brihadeeswara Chola; Taj Mahal Shah Jahan; Bani Thani Kishangarh.",
      "സാരനാഥ് സിംഹമുദ്ര; ദീദാർഗഞ്ച് യക്ഷി; ഗന്ധാര vs മഥുര; അജന്ത; ഖജുരാഹോ; കോണാർക്ക്; ബൃഹദീശ്വര; താജ്; ബനി ഠനി.",
    ),
    shifts: L(
      "More Deccani painting and Kerala mural (Mattancherry, Padmanabhapuram) items than older papers.",
      "പഴയ പേപ്പറുകളിലും അധികം ദക്കനി ചിത്രവും കേരള മ്യൂറലും (മട്ടാഞ്ചേരി).",
    ),
    method: L(
      "Four timelines on one sheet: sculpture, architecture, mural, miniature. Each with dynastic tags. Weekly: 20 matching drills.",
      "ഒരു ഷീറ്റിൽ നാല് ടൈംലൈൻ: ശില്പം, വാസ്തു, മ്യൂറൽ, മിനിയേച്ചർ. ആഴ്ചയിൽ 20 മാച്ചിംഗ്.",
    ),
    sections: [
      {
        heading: L("From Indus to Company school", "സിന്ധു മുതൽ കമ്പനി സ്കൂൾ വരെ"),
        body: L(
          "**Indus:** terracotta, bronze dancing girl, steatite seals — frontal animals, drilled eyes. **Maurya:** Ashokan pillars, polished sandstone, Didarganj Yakshi, Barabar caves. **Sunga/Satavahana:** Bharhut, Sanchi toranas, Amaravati. **Kushana:** two Buddha types — **Gandhara** (grey schist, Hellenistic drapery, wavy hair) and **Mathura** (red sandstone, fuller body, urna, ushnisha). **Gupta:** ‘classical’ — Sarnath standing Buddha, refined contrapposto, wet drapery.\n\n**Rock-cut:** Lomas Rishi, Bhaja, Karle, Ajanta, Elephanta, Ellora, Mamallapuram. **Temple languages:** **Nagara** (rekha-deul, northern), **Dravida** (vimana, southern), **Vesara** (Deccan hybrid). Landmarks: Dashavatara Deogarh; Orissa (Parashurameshvara → Mukteshvara → Lingaraja → Konark); Khajuraho; Chalukya (Aihole, Pattadakal, Badami); Rashtrakuta Kailasa Ellora; Pallava rathas; Chola Brihadeeswara; Hoysala Belur/Halebid; Kashmir Martand.\n\n**Painting:** prehistoric Bhimbetka; Ajanta; later murals Bagh, Badami, Sittanavasal, Lepakshi, Kerala (Mattancherry). Miniatures: Pala/Jain manuscripts; Sultanate *Chaurapanchasika*; **Mughal** (Akbar atelier, Jahangir portrait zenith, Shah Jahan refinement); **Rajasthani** (Mewar, Marwar, Bundi, Kota, Kishangarh); **Pahari** (Basohli, Guler, Kangra/Nainsukh); **Deccani** (Ahmadnagar, Bijapur, Golconda). 18th–19th c. **Company painting**.",
          "**സിന്ധു** മുദ്ര, നർത്തകി. **മൗര്യ** അശോക സ്തംഭം, ദീദാർഗഞ്ച്. **കുഷാണ:** ഗന്ധാര vs മഥുര ബുദ്ധ. **ഗുപ്ത** ക്ലാസിക്കൽ സാരനാഥ്.\n\n**നാഗര / ദ്രാവിഡ / വേസര.** എല്ലോറ കൈലാസം, ബൃഹദീശ്വര, കോണാർക്ക്, ഖജുരാഹോ, മാമല്ലപുരം.\n\n**അജന്ത, ഭീംബേട്ട്ക.** മുഗൾ–രാജസ്ഥാനി–പഹാഡി–ദക്കനി മിനിയേച്ചർ. കമ്പനി ചിത്രം.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Gandhara Buddha = red sandstone Mathura style.", "ഗന്ധാര ബുദ്ധ = ചുവന്ന മണൽക്കല്ല് മഥുര."),
        right: L("Gandhara: grey schist, Greco-Roman. Mathura: spotted red sandstone, indigenous fullness.", "ഗന്ധാര: ചാര ഷിസ്റ്റ്, ഗ്രീക്കോ-റോമൻ. മഥുര: ചുവന്ന മണൽക്കല്ല്, തദ്ദേശീയ പൂർണത."),
        fix: L("Grey-Greek-Gandhara. Red-round-Mathura.", "ഗ്രേ-ഗ്രീക്ക്-ഗന്ധാര. റെഡ്-റൗണ്ട്-മഥുര."),
      },
    ],
    flash: [
      { term: L("Nagara", "നാഗര"), def: L("North Indian temple: beehive shikhara / rekha-deul, no heavy brick vimana storeys.", "ഉത്തരേന്ത്യൻ ക്ഷേത്രം: ശിഖര/രേഖ-ദേവൽ.") },
      { term: L("Jahangir", "ജഹാംഗീർ"), def: L("Mughal patron of naturalistic portrait and album pages; Mansur the animal painter.", "സ്വാഭാവിക പോർട്രെയ്റ്റ്; മൻസൂർ മൃഗചിത്രകാരൻ.") },
    ],
  },
  {
    id: "va-u8",
    paper: "va",
    no: 8,
    title: L("Modern & Contemporary Indian Art", "ആധുനിക & സമകാലിക ഇന്ത്യൻ കല"),
    examNote: L("1850s–now. Groups, schools, biennales, design/advertising, art education.", "1850കൾ–ഇന്ന്. ഗ്രൂപ്പുകൾ, സ്കൂളുകൾ, ബിനാലെ, ഡിസൈൻ, ആർട്ട് എഡ്യൂക്കേഷൻ."),
    jrfWhy: L(
      "JRF matching: PAG six founders, Cholamandal–Paniker, Santiniketan triad (Nandalal, Benodebehari, Ramkinkar), Kochi-Muziris as biennale.",
      "PAG ആറ് സ്ഥാപകർ, ചോഴമണ്ഡലം–പാനിക്കർ, ശാന്തിനികേതൻ ത്രയം, കൊച്ചി-മുസിരിസ്.",
    ),
    howAsked: L(
      "Who founded what; Company school vs Bengal School polemic (Havell, Coomaraswamy, Abanindranath); Progressive Artists’ Group year/city; design/visual communication basics; colonial art schools.",
      "ആര് എന്ത് സ്ഥാപിച്ചു; ബംഗാൾ സ്കൂൾ വാദം; PAG വർഷം/നഗരം; ഡിസൈൻ; കൊളോണിയൽ ആർട്ട് സ്കൂൾ.",
    ),
    repeats: L(
      "Ravi Varma oleographs; Abanindranath *Bharat Mata*; Amrita Sher-Gil; Jamini Roy; PAG 1947 Bombay; Calcutta Group; Delhi Shilpi Chakra; Cholamandal 1966; Baroda / Faculty of Fine Arts; NGMA.",
      "രവി വർമ്മ; അബനീന്ദ്രനാഥ് ഭാരതമാതാ; അമൃത ഷെർഗിൽ; ജാമിനി റോയ്; PAG 1947; കൽക്കട്ട ഗ്രൂപ്പ്; ദില്ലി ശില്പി ചക്ര; ചോഴമണ്ഡലം 1966.",
    ),
    shifts: L(
      "Kochi-Muziris Biennale (2012–), Indian new media, curatorial turn, advertising/visual communication questions, NEP/IKS touching art education.",
      "കൊച്ചി-മുസിരിസ് ബിനാലെ (2012–), ന്യൂ മീഡിയ, ക്യുറേഷൻ, അഡ്വർട്ടൈസിംഗ്, ആർട്ട് എഡ്യൂക്കേഷനിൽ NEP/IKS.",
    ),
    method: L(
      "Group sheet: name, city, year, 3 members, one stylistic keyword. Then a separate ‘women artists’ list (Sher-Gil, Nasreen Mohamedi, Arpita Singh, Nalini Malani, Dayanita Singh…). Colonial schools: Madras, Calcutta, Bombay, Lahore.",
      "ഗ്രൂപ്പ് ഷീറ്റ്: പേര്, നഗരം, വർഷം, 3 അംഗങ്ങൾ, ഒരു ശൈലി കീവേഡ്. സ്ത്രീ കലാകാരികളുടെ ലിസ്റ്റ്. കൊളോണിയൽ സ്കൂളുകൾ: മദ്രാസ്, കൽക്കട്ട, ബോംബെ, ലാഹോർ.",
    ),
    sections: [
      {
        heading: L("Colonial schools to the biennale", "കൊളോണിയൽ സ്കൂൾ മുതൽ ബിനാലെ വരെ"),
        body: L(
          "**Company painting** for British patrons. **Madras/Calcutta/Bombay/Lahore** art schools (British academic). **Ravi Varma:** oil, academic realism, oleographs — mass Hindu iconography.\n\n**Swadeshi / Bengal School:** E.B. Havell, A.K. Coomaraswamy, Abanindranath Tagore — wash, Mughal-Ajanta revival, anti-academic. **Santiniketan:** Nandalal Bose, Benodebehari Mukherjee (Hindi Bhavan mural), Ramkinkar Baij (outdoor modernist sculpture). **Amrita Sher-Gil:** Paris training, Indian subject, *Three Girls*. **Jamini Roy:** folk-modern, Kalighat afterimage.\n\n**1940s groups:** Calcutta Group; **Progressive Artists’ Group, Bombay 1947** — Souza, Raza, Husain, Ara, Bakre, Gade (later others). Delhi Shilpi Chakra. **Cholamandal Artists’ Village** (K.C.S. Paniker, 1966, Chennai).\n\n**Baroda** narrative/figurative (Bhupen Khakhar, Gulammohammed Sheikh). Abstraction (Gaitonde, Swaminathan). 1990s–: installation, video, diaspora, **Kochi-Muziris Biennale**. **Art education:** colonial syllabus → Bauhaus leaks via Santiniketan → contemporary MFA / design schools (NID 1961). **Advertising / visual communication:** image, type, brand, poster (a syllabus clause — do not skip).",
          "**കമ്പനി ചിത്രം. ആർട്ട് സ്കൂളുകൾ. രവി വർമ്മ** ഓയിൽ/ഒലിയോഗ്രാഫ്.\n\n**ബംഗാൾ സ്കൂൾ** ഹാവൽ, കുമാരസ്വാമി, അബനീന്ദ്രനാഥ്. **ശാന്തിനികേതൻ** നന്ദലാൽ, ബിനോദ്‌ബിഹാരി, രാംകിങ്കർ. **ഷെർഗിൽ, ജാമിനി റോയ്.**\n\n**PAG ബോംബെ 1947.** ചോഴമണ്ഡലം 1966. ബറോഡ. **കൊച്ചി ബിനാലെ.** NID 1961. അഡ്വർട്ടൈസിംഗ്/വിഷ്വൽ കമ്യൂണിക്കേഷൻ സിലബസിൽ ഉണ്ട് — ഒഴിവാക്കരുത്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("PAG founded in Calcutta in 1943.", "PAG 1943-ൽ കൽക്കട്ടയിൽ."),
        right: L("Calcutta Group is 1943-ish Calcutta. PAG is 1947 Bombay.", "കൽക്കട്ട ഗ്രൂപ്പ് ~1943 കൽക്കട്ട. PAG 1947 ബോംബെ."),
        fix: L("Calcutta Group ≠ Progressive Artists’ Group. Different city, different year.", "വേറെ നഗരം, വേറെ വർഷം."),
      },
    ],
    flash: [
      { term: L("PAG", "PAG"), def: L("Progressive Artists’ Group, Bombay, 1947 — Souza, Raza, Husain, Ara, Bakre, Gade.", "പ്രോഗ്രസീവ് ആർട്ടിസ്റ്റ്സ് ഗ്രൂപ്പ്, ബോംബെ, 1947.") },
      { term: L("Cholamandal", "ചോഴമണ്ഡലം"), def: L("Artists’ village near Chennai, 1966, founded around K.C.S. Paniker.", "1966, ചെന്നൈയ്ക്കടുത്ത്, കെ.സി.എസ്. പാനിക്കർ.") },
    ],
  },
  {
    id: "va-u9",
    paper: "va",
    no: 9,
    title: L("Asia & the Ancient Near East", "ഏഷ്യയും പുരാതന സമീപപൂർവ്വവും"),
    examNote: L("Mesopotamia, Persia, China, Japan, Tibet, Nepal, Sri Lanka, SE Asia.", "മെസൊപ്പൊട്ടേമിയ, പേർഷ്യ, ചൈന, ജപ്പാൻ, ടിബറ്റ്, നേപ്പാൾ, ശ്രീലങ്ക, തെക്കുകിഴക്കൻ ഏഷ്യ."),
    jrfWhy: L(
      "Low competition unit. A prepared candidate picks up 8–10 marks others leave on the table.",
      "മത്സരം കുറഞ്ഞ യൂണിറ്റ്. തയ്യാറുള്ളയാൾ മറ്റുള്ളവർ വിടുന്ന 8–10 മാർക്ക് എടുക്കും.",
    ),
    howAsked: L(
      "Ziggurat vs stupa vs pagoda; terracotta army; ukiyo-e masters; Angkor Wat; Borobudur; Sigiriya; thangka; Achaemenid Persepolis.",
      "സിഗുറാറ്റ് vs സ്തൂപ vs പഗോഡ; ടെറാക്കോട്ട സേന; ഉക്യോ-ഇ; അങ്കോർ വാട്ട്; ബോറോബുദൂർ; സിഗിരിയ; തങ്ക; പെർസെപോലിസ്.",
    ),
    repeats: L(
      "Sumer ziggurat; Assyrian lamassu; Egyptian influence is NOT this unit’s core but Mesopotamia is; Hokusai *Great Wave*; Angkor Vishnu/Khmer; Borobudur mandala mountain.",
      "സുമേർ സിഗുറാറ്റ്; അസ്സീരിയൻ ലമാസു; ഹോകുസായി; അങ്കോർ; ബോറോബുദൂർ മണ്ഡല പർവ്വതം.",
    ),
    shifts: L(
      "Occasional questions on the Silk Road as image-route (Dunhuang caves) connecting Units VII and IX.",
      "സിൽക്ക് റോഡ് (ദുൻഹുവാങ്) VII-ഉം IX-ഉം ബന്ധിപ്പിക്കുന്ന ചോദ്യങ്ങൾ.",
    ),
    method: L(
      "Map + one monument per culture. Do not deep-read all of China; lock dynastic signatures: Shang bronze, Han tomb, Tang Buddhist, Song landscape, Edo ukiyo-e.",
      "മാപ്പ് + ഓരോ സംസ്കാരത്തിനും ഒരു സ്മാരകം. ഷാങ് വെങ്കലം, ഹാൻ ശവകുടീരം, ടാങ് ബൗദ്ധം, സോങ് ലാൻഡ്സ്കേപ്പ്, എഡോ ഉക്യോ-ഇ.",
    ),
    sections: [
      {
        heading: L("West Asia to the Pacific rim", "പശ്ചിമേഷ്യ മുതൽ പസഫിക് വരെ"),
        body: L(
          "**Mesopotamia:** Sumer (ziggurat, votive statues), Akkad (Naram-Sin stele), Babylon (Ishtar Gate), Assyria (lamassu, narrative relief). **Persia:** Achaemenid Persepolis; Sasanian rock reliefs and silver.\n\n**China:** Shang ritual bronze; terracotta warriors (Qin); Han; Buddhist sculpture to Tang; Six Dynasties / Tang figure painting; **Song to Qing landscape** (mist, brush, literati). **Japan:** haniwa; Nara–Kamakura Buddhist sculpture; Heian *Tale of Genji* painting; Momoyama–Edo screens; **ukiyo-e** (Hokusai, Hiroshige, Utamaro).\n\n**Tibet:** thangka, mandala. **Nepal:** Newar bronze and paubha. **Sri Lanka:** Anuradhapura, **Sigiriya** maidens. **SE Asia:** **Borobudur** (Java, mandala mountain), **Angkor Wat** (Khmer, Vishnu), Champa, Thai Sukhothai Buddha. Indian forms travel and localise — that transformation is the point of the unit.",
          "**മെസൊപ്പൊട്ടേമിയ** സിഗുറാറ്റ്, ലമാസു, ഇഷ്താർ ഗേറ്റ്. **അക്കാമെനിഡ്** പെർസെപോലിസ്.\n\n**ചൈന** ഷാങ് വെങ്കലം, ടെറാക്കോട്ട സേന, സോങ് ലാൻഡ്സ്കേപ്പ്. **ജപ്പാൻ** ഹനിവ, ഉക്യോ-ഇ.\n\n**ടിബറ്റ്** തങ്ക. **നേപ്പാൾ** നേവാർ വെങ്കലം. **സിഗിരിയ.** **ബോറോബുദൂർ, അങ്കോർ വാട്ട്.** ഇന്ത്യൻ രൂപം യാത്ര ചെയ്ത് തദ്ദേശീയമാകുന്നു — അതാണ് യൂണിറ്റിന്റെ പോയിന്റ്.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Angkor Wat is a Buddhist stupa-mountain like Borobudur.", "അങ്കോർ വാട്ട് ബോറോബുദൂർ പോലുള്ള ബൗദ്ധ സ്തൂപ-പർവ്വതം."),
        right: L("Angkor Wat is a Khmer Hindu (Vishnu) temple-mountain; Borobudur is a Javanese Buddhist mandala.", "അങ്കോർ വാട്ട് ഖമർ ഹൈന്ദവ (വിഷ്ണു) ക്ഷേത്ര-പർവ്വതം; ബോറോബുദൂർ ജാവനീസ് ബൗദ്ധ മണ്ഡലം."),
        fix: L("Angkor = Vishnu/Khmer. Borobudur = Buddha/Java.", "അങ്കോർ = വിഷ്ണു/ഖമർ. ബോറോബുദൂർ = ബുദ്ധ/ജാവ."),
      },
    ],
    flash: [
      { term: L("Ukiyo-e", "ഉക്യോ-ഇ"), def: L("Edo ‘pictures of the floating world’ — woodblock prints, actors, landscapes, beauties.", "എഡോ ‘ഒഴുകുന്ന ലോകത്തിന്റെ ചിത്രങ്ങൾ’ — വുഡ്ബ്ലോക്ക്.") },
      { term: L("Ziggurat", "സിഗുറാറ്റ്"), def: L("Mesopotamian stepped temple platform, not a tomb pyramid.", "മെസൊപ്പൊട്ടേമിയൻ പടിക്കെട്ടുള്ള ക്ഷേത്ര പ്ലാറ്റ്ഫോം — ശവകുടീര പിരമിഡല്ല.") },
    ],
  },
  {
    id: "va-u10",
    paper: "va",
    no: 10,
    title: L("Folk, Methods, New Art History", "നാടൻ കല, മെത്തേഡ്, ന്യൂ ആർട്ട് ഹിസ്റ്ററി"),
    examNote: L("Two halves: living traditions + theory of the discipline. Both are examined.", "രണ്ട് ഭാഗം: ജീവിക്കുന്ന പാരമ്പര്യം + ശാഖയുടെ സിദ്ധാന്തം. രണ്ടും ചോദിക്കും."),
    jrfWhy: L(
      "Panofsky’s three levels, Greenberg formalism, T.J. Clark social history, Pollock-Parker feminism, Kochi curating — this is JRF vocabulary.",
      "പനോഫ്സ്കിയുടെ മൂന്ന് തലം, ഗ്രീൻബർഗ് ഫോർമലിസം, ടി.ജെ. ക്ലാർക്ക്, ഫെമിനിസം, കൊച്ചി ക്യുറേഷൻ — ജെആർഎഫ് പദാവലി.",
    ),
    howAsked: L(
      "Match folk form–state; Gestalt laws; iconology vs iconography; deconstruction; museum vs gallery vs biennale curator.",
      "നാടൻ രൂപം–സംസ്ഥാനം; ഗെസ്റ്റാൾട്ട്; ഐക്കണോളജി vs ഐക്കണോഗ്രഫി; ഡീകൺസ്ട്രക്ഷൻ; മ്യൂസിയം vs ഗാലറി vs ക്യുറേറ്റർ.",
    ),
    repeats: L(
      "Warli (Maharashtra), Madhubani/Mithila (Bihar), Gond (MP), Patachitra (Odisha/Bengal), Phad (Rajasthan), Kalamkari (Andhra), Pichwai, Kalighat. Panofsky pre-iconographic / iconographic / iconological.",
      "വാർലി, മധുബനി, ഗോണ്ട്, പടചിത്ര, ഫദ്, കലംകാരി, പിച്ച്‌വായ്, കാളിഘട്ട്. പനോഫ്സ്കി മൂന്ന് തലം.",
    ),
    shifts: L(
      "Contemporary folk-modern (Jangarh Singh Shyam), GI tags, curator as author, New Art History (class, gender, deconstruction), IKS debates.",
      "ജംഗഢ് സിംഗ് ശ്യാം, GI ടാഗ്, ക്യുറേറ്റർ-രചയിതാവ്, ന്യൂ ആർട്ട് ഹിസ്റ്ററി, IKS.",
    ),
    method: L(
      "Map of folk forms (state + visual trait). Then a methods ladder: formalism → iconology → Marxism → feminism → semiotics → deconstruction → New Art History. One sentence each.",
      "നാടൻ രൂപങ്ങളുടെ മാപ്പ്. പിന്നെ മെത്തേഡ് ഏണി: ഫോർമലിസം → ഐക്കണോളജി → മാർക്സിസം → ഫെമിനിസം → സെമിയോട്ടിക്സ് → ഡീകൺസ്ട്രക്ഷൻ. ഓരോന്നിനും ഒരു വാചകം.",
    ),
    sections: [
      {
        heading: L("Living traditions and how we write about art", "ജീവിക്കുന്ന പാരമ്പര്യവും കലയെഴുത്തും"),
        body: L(
          "**Folk / tribal / craft:** Warli (white on mud, circle-triangle-square), Madhubani, Gond (Jangarh), Patachitra, Phad, Kalamkari, Chhau masks, bronze Dokra, textile (ikat, bandhani). Contemporary transformation: market, Biennale, NGMA, copyright, GI.\n\n**Methods:** **Formalism** (Wölfflin, Greenberg — looking at form). **Iconography / Iconology** (Panofsky: 1 primary/natural subject, 2 conventional/iconographic, 3 intrinsic/iconological). **Gestalt:** proximity, similarity, continuity, closure, figure-ground. **Psychoanalytic** (Freud, Lacan — desire, gaze). **Class and gender** (T.J. Clark; Griselda Pollock). **Semiotics** (sign, Saussure, Barthes). **Deconstruction** (Derrida — unstable meaning) opening **New Art History**. **Indian discipline:** colonial archaeological survey → Havell/Coomaraswamy nationalist writing → university departments post-Independence. **Curating:** museum (collection, conservation, education), gallery (market), biennale (commission, theme) — a confluence the syllabus names explicitly.",
          "**വാർലി, മധുബനി, ഗോണ്ട്, പടചിത്ര, ഫദ്, കലംകാരി, ഡോക്ര.** സമകാലിക രൂപാന്തരം: വിപണി, ബിനാലെ, GI.\n\n**ഫോർമലിസം. ഐക്കണോളജി (പനോഫ്സ്കി 3 തലം). ഗെസ്റ്റാൾട്ട്. സൈക്കോഅനാലിറ്റിക്. ക്ലാസ്/ജെൻഡർ. സെമിയോട്ടിക്സ്. ഡീകൺസ്ട്രക്ഷൻ → ന്യൂ ആർട്ട് ഹിസ്റ്ററി.** കൊളോണിയൽ സർവേ → കുമാരസ്വാമി → സ്വാതന്ത്ര്യാനന്തര വകുപ്പുകൾ. **ക്യുറേഷൻ:** മ്യൂസിയം, ഗാലറി, ബിനാലെ.",
        ),
      },
    ],
    traps: [
      {
        wrong: L("Iconography and iconology are synonyms.", "ഐക്കണോഗ്രഫിയും ഐക്കണോളജിയും പര്യായം."),
        right: L("Iconography identifies motifs. Iconology interprets cultural meaning (Panofsky’s third level).", "ഐക്കണോഗ്രഫി മോട്ടിഫ് തിരിച്ചറിയുന്നു. ഐക്കണോളജി സാംസ്കാരിക അർഥം (മൂന്നാം തലം)."),
        fix: L("Graphy = writing/listing. Logy = interpreting.", "Graphy = എഴുത്ത്/ലിസ്റ്റ്. Logy = വ്യാഖ്യാനം."),
      },
    ],
    flash: [
      { term: L("Panofsky 1–2–3", "പനോഫ്സ്കി 1–2–3"), def: L("Pre-iconographic → Iconographic → Iconological.", "പ്രീ-ഐക്കണോഗ്രാഫിക് → ഐക്കണോഗ്രാഫിക് → ഐക്കണോളജിക്കൽ.") },
      { term: L("Warli", "വാർലി"), def: L("Maharashtra tribal painting: white rice paste on earthen ground; geometric humans.", "മഹാരാഷ്ട്ര: ചെളിപ്പശയിൽ വെളുത്ത അരി പേസ്റ്റ്; ജ്യാമിതീയ മനുഷ്യർ.") },
    ],
  },
];
