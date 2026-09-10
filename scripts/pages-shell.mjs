#!/usr/bin/env node
/**
 * TanStack SPA prerender writes _shell.html. GitHub Pages needs index.html
 * plus 404.html so /kalashala/updates (and every other route) hydrates.
 */
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roots = ["dist/client", ".output/public", "dist"];
const dir = roots.find((d) => existsSync(join(d, "_shell.html")) || existsSync(join(d, "index.html")));
if (!dir) {
  console.error("pages-shell: no SPA output (looked in dist/client, .output/public, dist)");
  process.exit(1);
}
const shell = existsSync(join(dir, "_shell.html")) ? join(dir, "_shell.html") : join(dir, "index.html");
copyFileSync(shell, join(dir, "index.html"));
copyFileSync(shell, join(dir, "404.html"));
writeFileSync(join(dir, ".nojekyll"), "");
console.log(`pages-shell: ready in ${dir}`);
