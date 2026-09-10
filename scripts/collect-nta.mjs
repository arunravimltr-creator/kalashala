#!/usr/bin/env node
/**
 * Pulls official UGC-NET notices from NTA and writes public/nta-feed.json.
 * Used by the weekly GitHub Action and by local collect.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const NTA_HOME = "https://ugcnet.nta.nic.in/";
const NTA_NOTICES_2026 = "https://ugcnet.nta.nic.in/document-category/public-notices-2026/";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function decode(text) {
  return String(text)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&/gi, "&")
    .replace(/"/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/</gi, "<")
    .replace(/>/gi, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, " ")
    .trim();
}

function noticeId(url) {
  const tail = url.replace(/^https?:\/\//, "").slice(-72);
  return tail.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function dateFromNtaUrl(url) {
  const m = /\/uploads\/(\d{4})\/(\d{2})\/(\d{8})/.exec(url);
  if (!m) return "";
  const raw = m[3];
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

function classifyNotice(title) {
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

function parsePdfAnchors(html) {
  const out = [];
  const re = /<a[^>]+href=["'](https?:\/\/[^"']+\.pdf)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const url = m[1];
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
      source: "nta",
    });
  }
  return out;
}

function merge(primary, extra) {
  const map = new Map();
  for (const n of [...primary, ...extra]) {
    if (!n.url || !n.title) continue;
    const id = n.id || noticeId(n.url);
    if (!map.has(id)) map.set(id, { ...n, id });
  }
  return [...map.values()].sort(
    (a, b) => (b.published || "").localeCompare(a.published || "") || a.title.localeCompare(b.title),
  );
}

async function pull(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`NTA ${res.status} ${url}`);
  return res.text();
}

const [noticesHtml, homeHtml] = await Promise.all([pull(NTA_NOTICES_2026), pull(NTA_HOME)]);
const live = merge(parsePdfAnchors(noticesHtml), parsePdfAnchors(homeHtml)).filter(
  (n) => n.published.startsWith("2026") || /2026|december|june/i.test(n.title),
);
const payload = {
  fetchedAt: new Date().toISOString(),
  source: live.length ? "live" : "empty",
  items: live.slice(0, 80),
};
const dest = join(ROOT, "public/nta-feed.json");
writeFileSync(dest, JSON.stringify(payload, null, 2) + "\n");
console.log(`wrote ${payload.items.length} notices → public/nta-feed.json`);
