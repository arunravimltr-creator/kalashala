import { tx, ui } from "@/lib/i18n";
import { useKalashala } from "@/lib/store";
import type { Text } from "@/lib/types";

export function T({ k }: { k: keyof typeof ui }) {
  const lang = useKalashala((s) => s.lang);
  return <>{tx(ui[k], lang)}</>;
}

export function useT() {
  const lang = useKalashala((s) => s.lang);
  return {
    lang,
    t: (k: keyof typeof ui) => tx(ui[k], lang),
    x: (text: Text) => tx(text, lang),
  };
}
