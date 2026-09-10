/* Kalashala service worker — installable PWA + weekly NTA cache. */
const CACHE = "kalashala-shell-v2";
const PRECACHE = [
  "/",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/nta-feed.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

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
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname.includes("_server") ||
    url.pathname.startsWith("/__grok/") ||
    url.pathname.startsWith("/@")
  ) {
    return;
  }
  if (url.pathname === "/nta-feed.json") {
    event.respondWith(networkFirst(req));
    return;
  }
  if (req.mode === "navigate") {
    event.respondWith(networkFirst(req).catch(() => caches.match("/") || caches.match(req)));
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
  const copy = res.clone();
  void caches.open(CACHE).then((c) => c.put(req, copy));
  return res;
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    const copy = res.clone();
    void caches.open(CACHE).then((c) => c.put(req, copy));
    return res;
  } catch {
    const hit = await caches.match(req);
    if (hit) return hit;
    throw new Error("offline");
  }
}

async function refreshNta() {
  try {
    const res = await fetch("/nta-feed.json", { cache: "no-store" });
    if (!res.ok) return;
    const copy = res.clone();
    const cache = await caches.open(CACHE);
    await cache.put("/nta-feed.json", copy);
    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];
    const top = items[0];
    if (top && self.registration.showNotification) {
      await self.registration.showNotification("Kalashala · NTA", {
        body: top.title,
        icon: "/icons/icon-192.png",
        badge: "/icons/icon-192.png",
        tag: "kalashala-nta",
        data: { url: "/updates" },
      });
    }
  } catch {
    /* offline */
  }
}

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const dest = event.notification.data?.url || "/updates";
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
