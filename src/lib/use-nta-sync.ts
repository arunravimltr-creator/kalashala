import { SEED_NOTICES } from "@/data/nta-seed";
import { publicUrl } from "@/lib/base";
import { fetchNtaFeed } from "@/lib/nta-feed";
import { mergeNotices, WEEK_MS, type OfficialNotice } from "@/lib/nta";
import { useKalashala } from "@/lib/store";

let inflight: Promise<{ fresh: number; ok: boolean }> | null = null;

export async function syncNta(opts: { force?: boolean } = {}): Promise<{ fresh: number; ok: boolean }> {
  if (inflight) return inflight;
  inflight = run(opts).finally(() => {
    inflight = null;
  });
  return inflight;
}

async function loadPackagedFeed(): Promise<OfficialNotice[]> {
  if (typeof fetch === "undefined") return [];
  try {
    const res = await fetch(publicUrl("nta-feed.json"), { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as { items?: OfficialNotice[] };
    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

async function run(opts: { force?: boolean }): Promise<{ fresh: number; ok: boolean }> {
  const state = useKalashala.getState();
  const due = !state.lastNoticeFetch || Date.now() - state.lastNoticeFetch >= WEEK_MS;
  if (!opts.force && !due) {
    if (state.notices.length === 0) {
      const packaged = await loadPackagedFeed();
      state.applyNotices(mergeNotices(packaged, SEED_NOTICES), Date.now(), true);
    }
    return { fresh: 0, ok: state.noticeFetchOk };
  }
  const before = new Set(state.notices.map((n) => n.id));
  const hadFetch = Boolean(state.lastNoticeFetch);
  const packaged = await loadPackagedFeed();
  try {
    const feed = await fetchNtaFeed();
    const items = mergeNotices(feed.items, mergeNotices(packaged, SEED_NOTICES));
    useKalashala.getState().applyNotices(items, feed.fetchedAt, feed.ok || items.length > 0);
    const after = useKalashala.getState().notices;
    const fresh = hadFetch ? after.filter((n) => !before.has(n.id)).length : 0;
    if (fresh > 0) pingDevice(fresh, after[0]?.title ?? "NTA update");
    return { fresh, ok: feed.ok || items.length > 0 };
  } catch {
    const fallback = mergeNotices(packaged, SEED_NOTICES);
    const ok = fallback.length > 0;
    useKalashala.getState().applyNotices(fallback.length ? fallback : state.notices, Date.now(), ok);
    const after = useKalashala.getState().notices;
    const fresh = hadFetch ? after.filter((n) => !before.has(n.id)).length : 0;
    if (fresh > 0) pingDevice(fresh, after[0]?.title ?? "NTA update");
    return { fresh, ok };
  }
}

function pingDevice(count: number, sample: string) {
  if (!useKalashala.getState().notifyPush) return;
  if (typeof Notification === "undefined" || Notification.permission !== "granted") return;
  try {
    new Notification("Kalashala", {
      body: count === 1 ? sample : `${count} new NTA notices`,
      tag: "kalashala-nta",
      icon: publicUrl("icons/icon-192.png"),
    });
  } catch {
    /* ignore denied / unsupported */
  }
}
