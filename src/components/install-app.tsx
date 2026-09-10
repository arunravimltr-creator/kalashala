import { Download, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { useT } from "@/components/t";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PromptEvent = Event & { prompt: () => Promise<void> };

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || Boolean(nav.standalone);
}

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

export function InstallAppCard({ compact = false }: { compact?: boolean }) {
  const { t } = useT();
  const [installed, setInstalled] = useState(false);
  const [prompt, setPrompt] = useState<PromptEvent | null>(null);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    setInstalled(isStandalone());
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setPrompt(e as PromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  async function install() {
    if (prompt) {
      await prompt.prompt();
      setPrompt(null);
      return;
    }
    if (isIos()) {
      window.location.assign("/?install=1&platform=ios");
      return;
    }
    setHint(true);
  }

  if (installed) {
    return compact ? (
      <p className="text-xs text-muted">{t("appInstalled")}</p>
    ) : (
      <Card>
        <CardContent className="flex items-center gap-3 pt-5">
          <Smartphone className="size-5 text-sage" />
          <p className="text-sm text-ink-soft">{t("appInstalled")}</p>
        </CardContent>
      </Card>
    );
  }

  if (compact) {
    return (
      <Button size="sm" variant="outline" onClick={() => void install()}>
        <Download className="size-4" />
        {t("installApp")}
      </Button>
    );
  }

  return (
    <Card className="border-prussian/30 bg-prussian/5">
      <CardContent className="space-y-3 pt-5">
        <div className="flex items-center gap-2">
          <Smartphone className="size-4 text-prussian" />
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-prussian">{t("installApp")}</p>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{t("installAppLead")}</p>
        <Button onClick={() => void install()}>
          <Download className="size-4" />
          {t("installApp")}
        </Button>
        {hint ? <p className="text-sm text-ink-soft">{t("installManual")}</p> : null}
      </CardContent>
    </Card>
  );
}
