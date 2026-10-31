/* Kalashala service worker — scoped so GitHub Pages (/kalashala/) and root hosts both work. */
const CACHE = "kalashala-shell-v3";

function scopeUrl(path) {
  return new URL(String(path).replace(/^\//, ""), self.registration.scope).href;
}

const PRECACHE = [
  "./",
  "./manifest.webmanifest",
  "./favicon.svg",
  "./nta-feed.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
].map(scopeUrl);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.href.startsWith(self.registration.scope) && url.pathname !== "/sw.js") return;
  if (
    url.pathname.includes("/api/") ||
    url.pathname.includes("_server") ||
    url.pathname.includes("/__grok/") ||
    url.pathname.includes("/@")
  ) {
    return;
  }
  if (url.pathname.endsWith("/nta-feed.json") || url.pathname.endsWith("nta-feed.json")) {
    event.respondWith(networkFirst(req));
    return;
  }
  if (req.mode === "navigate") {
    event.respondWith(
      networkFirst(req).catch(async () => {
        const shell = await caches.match(scopeUrl("./"));
        return shell || caches.match(req);
      }),
    );
    return;
  }
  event.respondWith(cacheFirst(req));
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "nta-weekly") {
    event.waitUntil(refreshNta());
  }
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") void self.skipWaiting();
  if (event.data === "nta-now") void refreshNta();
});

async function cacheFirst(req) {
  const hit = await caches.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) {
    const copy = res.clone();
    void caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    if (res.ok) {
      const copy = res.clone();
      void caches.open(CACHE).then((c) => c.put(req, copy));
    }
    return res;
  } catch {
    const hit = await caches.match(req);
    if (hit) return hit;
    throw new Error("offline");
  }
}

async function refreshNta() {
  try {
    const feedUrl = scopeUrl("nta-feed.json");
    const res = await fetch(feedUrl, { cache: "no-store" });
    if (!res.ok) return;
    const copy = res.clone();
    const cache = await caches.open(CACHE);
    await cache.put(feedUrl, copy);
    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];
    const top = items[0];
    if (top && self.registration.showNotification) {
      await self.registration.showNotification("Kalashala · NTA", {
        body: top.title,
        icon: scopeUrl("icons/icon-192.png"),
        badge: scopeUrl("icons/icon-192.png"),
        tag: "kalashala-nta",
        data: { url: scopeUrl("updates") },
      });
    }
  } catch {
    /* offline */
  }
}

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const dest = event.notification.data?.url || scopeUrl("updates");
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      for (const c of clients) {
        if ("focus" in c) {
          void c.navigate(dest);
          return c.focus();
        }
      }
      return self.clients.openWindow(dest);
    }),
  );
});
