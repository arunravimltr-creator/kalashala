import { createServerFn } from "@tanstack/react-start";
import { SEED_NOTICES } from "@/data/nta-seed";
import {
  NTA_HOME,
  NTA_NOTICES_2026,
  classifyNotice,
  dateFromNtaUrl,
  mergeNotices,
  noticeId,
  type OfficialNotice,
} from "./nta";

type FeedResult = {
  ok: boolean;
  fetchedAt: number;
  items: OfficialNotice[];
  source: "live" | "seed";
  error?: string;
};

function decode(text: string): string {
  const named: Record<string, string> = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">",
    apos: "'",
  };
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (_, raw: string) => {
      if (raw[0] === "#") {
        const n = raw[1] === "x" || raw[1] === "X" ? Number.parseInt(raw.slice(2), 16) : Number(raw.slice(1));
        return Number.isFinite(n) ? String.fromCharCode(n) : "";
      }
      return named[raw.toLowerCase()] ?? `&${raw};`;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function parsePdfAnchors(html: string, source: OfficialNotice["source"]): OfficialNotice[] {
  const out: OfficialNotice[] = [];
  const re = /<a[^>]+href=["'](https?:\/\/[^"']+\.pdf)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const url = m[1]!;
    const title = decode(m[2] ?? "");
    if (!title) continue;
    const low = title.toLowerCase();
    if (low.startsWith("view(") || low.includes("accessible version") || low.includes("kb)")) continue;
    out.push({
      id: noticeId(url),
      kind: classifyNotice(title),
      title,
      url,
      published: dateFromNtaUrl(url),
      source,
    });
  }
  return out;
}

async function pull(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
    signal: AbortSignal.timeout(14000),
  });
  if (!res.ok) throw new Error(`NTA ${res.status}`);
  return res.text();
}

export const fetchNtaFeed = createServerFn({ method: "GET" }).handler(async (): Promise<FeedResult> => {
  const fetchedAt = Date.now();
  try {
    const [noticesHtml, homeHtml] = await Promise.all([pull(NTA_NOTICES_2026), pull(NTA_HOME)]);
    const live = mergeNotices(parsePdfAnchors(noticesHtml, "nta"), parsePdfAnchors(homeHtml, "nta")).filter(
      (n) => n.published.startsWith("2026") || /2026|december|june/i.test(n.title),
    );
    const items = mergeNotices(live, SEED_NOTICES);
    return { ok: true, fetchedAt, items, source: live.length ? "live" : "seed" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "fetch failed";
    return { ok: false, fetchedAt, items: SEED_NOTICES, source: "seed", error: message };
  }
});
