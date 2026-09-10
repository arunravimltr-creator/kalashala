const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export async function registerKalashalaWorker(): Promise<void> {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
    const sync = (reg as ServiceWorkerRegistration & {
      periodicSync?: { register: (tag: string, opts: { minInterval: number }) => Promise<void> };
    }).periodicSync;
    if (sync) {
      try {
        await sync.register("nta-weekly", { minInterval: WEEK_MS });
      } catch {
        /* permission / unsupported */
      }
    }
  } catch {
    /* ignore SW failures on preview hosts */
  }
}
