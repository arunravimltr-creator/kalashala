export type NoticeKind =
  | "register"
  | "syllabus"
  | "paper"
  | "key"
  | "result"
  | "admit"
  | "cutoff"
  | "city"
  | "bulletin"
  | "notice";

export type OfficialNotice = {
  id: string;
  kind: NoticeKind;
  title: string;
  url: string;
  published: string;
  source: "nta" | "ugc";
};

export type OfficialDesk = {
  id: string;
  kind: NoticeKind;
  title: { en: string; ml: string };
  blurb: { en: string; ml: string };
  url: string;
};

export const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
export const NTA_HOME = "https://ugcnet.nta.nic.in/";
export const NTA_NOTICES_2026 = "https://ugcnet.nta.nic.in/document-category/public-notices-2026/";
export const UGC_SYLLABUS = "https://www.ugcnetonline.in/syllabus-new.php";

export function noticeId(url: string): string {
  const tail = url.replace(/^https?:\/\//, "").slice(-72);
  return tail.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function dateFromNtaUrl(url: string): string {
  const m = /\/uploads\/(\d{4})\/(\d{2})\/(\d{8})/.exec(url);
  if (!m) return "";
  const raw = m[3]!;
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

export function classifyNotice(title: string): NoticeKind {
  const t = title.toLowerCase();
  if (/information bulletin|info bulletin/.test(t)) return "bulletin";
  if (/syllabus/.test(t)) return "syllabus";
  if (/cut[\s-]?off|cutoff/.test(t)) return "cutoff";
  if (/score\s*card|declaration of result|\bresults?\b/.test(t)) return "result";
  if (/answer key|final answer|provisional answer/.test(t)) return "key";
  if (/question paper|recorded response|response sheet|previous year/.test(t)) return "paper";
  if (/admit card/.test(t)) return "admit";
  if (/city intimation|allotment of .*city|exam city/.test(t)) return "city";
  if (/registration|application form|apply online|correction window/.test(t)) return "register";
  return "notice";
}

export function mergeNotices(primary: OfficialNotice[], extra: OfficialNotice[]): OfficialNotice[] {
  const map = new Map<string, OfficialNotice>();
  for (const n of [...primary, ...extra]) {
    if (!n.url || !n.title) continue;
    const id = n.id || noticeId(n.url);
    const prev = map.get(id);
    if (!prev) {
      map.set(id, { ...n, id });
      continue;
    }
    if (!prev.published && n.published) map.set(id, { ...prev, published: n.published });
  }
  return [...map.values()].sort((a, b) => (b.published || "").localeCompare(a.published || "") || a.title.localeCompare(b.title));
}

export const KIND_ORDER: NoticeKind[] = [
  "register",
  "bulletin",
  "syllabus",
  "admit",
  "city",
  "paper",
  "key",
  "result",
  "cutoff",
  "notice",
];
