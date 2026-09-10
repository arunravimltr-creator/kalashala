import { L } from "./builder";
import { classifyNotice, dateFromNtaUrl, noticeId, type OfficialDesk, type OfficialNotice } from "@/lib/nta";

function N(title: string, url: string, published?: string): OfficialNotice {
  return {
    id: noticeId(url),
    kind: classifyNotice(title),
    title,
    url,
    published: published ?? dateFromNtaUrl(url),
    source: "nta",
  };
}

/** Live NTA public notices as of 10 Sep 2026 — fallback if the live fetch is down. */
export const SEED_NOTICES: OfficialNotice[] = [
  N(
    "Challenge of Provisional Answer Keys for UGC-NET June 2026 Re-Exam-reg.",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/09/202609101788985717.pdf",
  ),
  N(
    "Public Notice regarding Advisory to candidates appearing for UGC-NET Re-Examination at Centre in Delhi",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/09/20260908411031566.pdf",
  ),
  N(
    "Release of Admit Card for the UGC-NET June 2026 re-examination on 9th and 10th September 2026-reg",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/09/202609041872400707.pdf",
  ),
  N(
    "Advance Intimation for Allotment of Re-Examination City to the Applicants of UGC-NET June 2026-reg",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/09/202609011468275818.pdf",
  ),
  N(
    "Declaration of results of UGC-NET June 2026 – reg.",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/08/20260828605740344.pdf",
  ),
  N(
    "UGC-NET Exam June-2026, (84) Subjects Category Wise Cut off Marks",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/08/2026082829087103.pdf",
  ),
  N(
    "Display of Final Answer Keys of UGC-NET June 2026 – reg.",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/08/20260828776295170.pdf",
  ),
  N(
    "Public Notice Re-conduct of the English, Commerce and Sociology papers",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/08/202608161987098773.pdf",
  ),
  N(
    "Public Notice regarding Challenge of Provisional Answer Keys for UGC-NET June 2026",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/08/20260816809171641.pdf",
  ),
  N(
    "Provisional Answer Key Public Notice UGC NET",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/08/202608101857573785.pdf",
  ),
  N(
    "Public Notice dated: 22.06.2026",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/06/20260622477163215.pdf",
  ),
  N(
    "Public Notice regarding opening of Portal for Submitting Scribe Details by the PwD/PwBD Candidates of UGC-NET June 2026 exam",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/06/20260618603677570.pdf",
  ),
  N(
    "Public Notice regarding the release of Admit Card for the UGC-NET June 2026 examination",
    "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/06/202606172040939335.pdf",
  ),
];

export const OFFICIAL_DESKS: OfficialDesk[] = [
  {
    id: "nta-home",
    kind: "notice",
    title: L("NTA UGC-NET home", "എൻടിഎ യുജിസി-നെറ്റ് ഹോം"),
    blurb: L("The official hub. Every new cycle starts here.", "ഔദ്യോഗിക കേന്ദ്രം. ഓരോ സൈക്കിളും ഇവിടെ തുടങ്ങും."),
    url: "https://ugcnet.nta.nic.in/",
  },
  {
    id: "notices-2026",
    kind: "notice",
    title: L("Public notices 2026", "2026 പബ്ലിക് നോട്ടീസ്"),
    blurb: L("Every PDF NTA published this year.", "ഈ വർഷം എൻടിഎ ഇട്ട എല്ലാ പിഡിഎഫും."),
    url: "https://ugcnet.nta.nic.in/document-category/public-notices-2026/",
  },
  {
    id: "register",
    kind: "register",
    title: L("Apply / registration portal", "അപേക്ഷ / രജിസ്ട്രേഷൻ"),
    blurb: L(
      "NTA login for the current window. December 2026 opens only after the official notification.",
      "ഇപ്പോഴത്തെ വിൻഡോയുടെ എൻടിഎ ലോഗിൻ. ഡിസംബർ 2026 വിജ്ഞാപനത്തിന് ശേഷം മാത്രം തുറക്കും.",
    ),
    url: "https://ugcnet.nta.nic.in/",
  },
  {
    id: "results",
    kind: "result",
    title: L("Scorecard / results", "സ്കോർകാർഡ് / ഫലം"),
    blurb: L("June 2026 scorecard login on NTA.", "ജൂൺ 2026 സ്കോർകാർഡ് — എൻടിഎ ലോഗിൻ."),
    url: "https://cnr.nic.in/Results26/Score/Login?enc=LH/Iqy2lIvm6yfwjd7BOsNPROEv0WO16vwSfOqO4R9E=",
  },
  {
    id: "admit",
    kind: "admit",
    title: L("Admit card", "അഡ്മിറ്റ് കാർഡ്"),
    blurb: L("Download hall ticket from the NTA admit-card service.", "എൻടിഎ അഡ്മിറ്റ്-കാർഡ് സർവീസിൽ നിന്ന് ഹാൾ ടിക്കറ്റ്."),
    url: "https://examinationservices.nic.in/AdmitCardService/Admitcard/Login?enc=LH/Iqy2lIvm6yfwjd7BOsNPROEv0WO16vwSfOqO4R9E=",
  },
  {
    id: "keys",
    kind: "key",
    title: L("Answer key / challenge login", "ഉത്തരക്കീ / ചലഞ്ച് ലോഗിൻ"),
    blurb: L("Provisional and final keys, response sheets, challenges.", "പ്രൊവിഷണൽ–ഫൈനൽ കീ, റെസ്പോൺസ് ഷീറ്റ്, ചലഞ്ച്."),
    url: "https://examinationservices.nic.in/ExamSys26Part2/Root/CandidateLogin.aspx?enc=Ei4cajBkK1gZSfgr53ImFV/yIzhTZHBze3wooSg9Djgija2T1vzGc16BomrI4u26",
  },
  {
    id: "p1-syllabus",
    kind: "syllabus",
    title: L("Paper I syllabus (official PDF)", "പേപ്പർ I സിലബസ് (ഔദ്യോഗിക PDF)"),
    blurb: L("June 2019-onwards syllabus. NTA does not post a fresh PDF every cycle unless the paper changes.", "2019 ജൂൺ മുതലുള്ള സിലബസ്. പേപ്പർ മാറിയാൽ അല്ലാതെ എൻടിഎ ഓരോ സൈക്കിളിലും പുതിയ PDF ഇടാറില്ല."),
    url: "https://www.ugcnetonline.in/showPdf.php?p1=NTA_All_R_Syllabus/00-Paper-I/Paper-I_English.pdf",
  },
  {
    id: "va-syllabus",
    kind: "syllabus",
    title: L("Visual Art (79) syllabus (official PDF)", "ദൃശ്യകല (79) സിലബസ് (ഔദ്യോഗിക PDF)"),
    blurb: L("Drawing, painting, sculpture, graphics, applied art, history of art.", "ചിത്രരചന, ശില്പം, ഗ്രാഫിക്സ്, അപ്ലൈഡ് ആർട്ട്, കലാചരിത്രം."),
    url: "https://www.ugcnetonline.in/showPdf.php?p1=NTA_All_R_Syllabus/79/Visual Art_English.pdf",
  },
  {
    id: "syllabus-index",
    kind: "syllabus",
    title: L("All-subject syllabus index", "എല്ലാ വിഷയങ്ങളുടെ സിലബസ്"),
    blurb: L("UGC NET syllabus table — English and Hindi PDFs.", "യുജിസി നെറ്റ് സിലബസ് പട്ടിക — ഇംഗ്ലീഷ്, ഹിന്ദി PDF."),
    url: "https://www.ugcnetonline.in/syllabus-new.php",
  },
  {
    id: "pyq",
    kind: "paper",
    title: L("Previous question papers (UGC archive)", "പഴയ ചോദ്യപേപ്പറുകൾ (യുജിസി ആർക്കൈവ്)"),
    blurb: L("Official archive. Current-cycle papers appear as public notices / response sheets on NTA.", "ഔദ്യോഗിക ആർക്കൈവ്. ഇപ്പോഴത്തെ സൈക്കിൾ പേപ്പർ എൻടിഎ പബ്ലിക് നോട്ടീസ് / റെസ്പോൺസ് ഷീറ്റായി വരും."),
    url: "https://www.ugcnetonline.in/question_papers_june2012.php",
  },
  {
    id: "ib-june",
    kind: "bulletin",
    title: L("June 2026 Information Bulletin", "ജൂൺ 2026 ഇൻഫർമേഷൻ ബുള്ളറ്റിൻ"),
    blurb: L("Eligibility, pattern, fees, how to apply — until the December 2026 bulletin replaces it.", "യോഗ്യത, രീതി, ഫീസ്, അപേക്ഷ — ഡിസംബർ 2026 ബുള്ളറ്റിൻ വരെ."),
    url: "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/05/202605081927849482.pdf",
  },
  {
    id: "contact",
    kind: "notice",
    title: L("NTA helpdesk", "എൻടിഎ ഹെൽപ്പ്‌ഡെസ്ക്"),
    blurb: L("011-40759000 · ugcnet@nta.ac.in", "011-40759000 · ugcnet@nta.ac.in"),
    url: "https://ugcnet.nta.nic.in/contact-us/",
  },
];

export const CYCLE_WATCH: {
  id: string;
  kind: OfficialDesk["kind"];
  match: RegExp;
  title: { en: string; ml: string };
  waiting: { en: string; ml: string };
}[] = [
  {
    id: "w-notify",
    kind: "bulletin",
    match: /december 2026.*(notification|information bulletin)|information bulletin.*december 2026/i,
    title: L("December 2026 notification / bulletin", "ഡിസംബർ 2026 വിജ്ഞാപനം / ബുള്ളറ്റിൻ"),
    waiting: L("Expected around October 2026. Not on NTA yet.", "ഒക്ടോബർ 2026 ആസന്നം. എൻടിഎയിൽ ഇതുവരെയില്ല."),
  },
  {
    id: "w-reg",
    kind: "register",
    match: /december 2026.*(registration|application)|application.*december 2026/i,
    title: L("December 2026 registration", "ഡിസംബർ 2026 രജിസ്ട്രേഷൻ"),
    waiting: L("Opens only after the notification. Watch this desk.", "വിജ്ഞാപനത്തിന് ശേഷം മാത്രം. ഈ ഡെസ്ക് നോക്കുക."),
  },
  {
    id: "w-city",
    kind: "city",
    match: /december 2026.*city|city.*december 2026/i,
    title: L("Exam city intimation", "പരീക്ഷാ നഗര അറിയിപ്പ്"),
    waiting: L("Usually a few days before the admit card.", "സാധാരണ അഡ്മിറ്റ് കാർഡിന് ഏതാനും ദിവസം മുമ്പ്."),
  },
  {
    id: "w-admit",
    kind: "admit",
    match: /december 2026.*admit|admit card.*december 2026/i,
    title: L("December 2026 admit card", "ഡിസംബർ 2026 അഡ്മിറ്റ് കാർഡ്"),
    waiting: L("Released subject-wise, close to the sitting.", "വിഷയം തിരിച്ച്, ഇരിപ്പിന് അടുത്ത്."),
  },
  {
    id: "w-paper",
    kind: "paper",
    match: /question paper|recorded response|response sheet/i,
    title: L("Question paper / response sheet", "ചോദ്യപേപ്പർ / റെസ്പോൺസ് ഷീറ്റ്"),
    waiting: L("NTA posts these with the provisional key — not before the exam.", "പ്രൊവിഷണൽ കീയോടെ. പരീക്ഷയ്ക്ക് മുമ്പല്ല."),
  },
  {
    id: "w-key",
    kind: "key",
    match: /answer key/i,
    title: L("Answer key", "ഉത്തരക്കീ"),
    waiting: L("Provisional first, then final after challenges.", "ആദ്യം പ്രൊവിഷണൽ, ചലഞ്ചിന് ശേഷം ഫൈനൽ."),
  },
  {
    id: "w-result",
    kind: "result",
    match: /declaration of results|score card|cut off/i,
    title: L("Result / cutoff", "ഫലം / ക്യൂട്ട്-ഓഫ്"),
    waiting: L("After keys are frozen. Visual Art (79) cut-offs appear in the subject-wise PDF.", "കീ ഫ്രീസ് കഴിഞ്ഞ്. ദൃശ്യകല (79) വിഷയം തിരിച്ചുള്ള PDF-ൽ."),
  },
];
