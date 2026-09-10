/** Vite `base` — `/` on Grok/Netlify/Vercel, `/kalashala/` on GitHub Pages. */
export const BASE = import.meta.env.BASE_URL || "/";

/** Public install URL GitHub Actions publishes. Open this on a phone, then Add to Home Screen. */
export const INSTALL_URL = "https://arunravimltr-creator.github.io/kalashala/";

export function publicUrl(path = ""): string {
  return `${BASE}${String(path).replace(/^\//, "")}`;
}

export function routerBasepath(): string | undefined {
  const trimmed = BASE.replace(/\/$/, "");
  return trimmed && trimmed !== "" ? trimmed : undefined;
}
