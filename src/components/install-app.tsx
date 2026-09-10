import { Download, ExternalLink, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { useT } from "@/components/t";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INSTALL_URL, publicUrl } from "@/lib/base";

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

function onPublicHost(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hostname.endsWith("github.io");
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
      window.location.assign(`${publicUrl("")}?install=1&platform=ios`);
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

  const openPage = (
    <Button asChild variant={compact ? "outline" : "default"} size={compact ? "sm" : "default"}>
      <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="size-4" />
        {t("openInstallPage")}
      </a>
    </Button>
  );

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {onPublicHost() ? (
          <Button size="sm" variant="outline" onClick={() => void install()}>
            <Download className="size-4" />
            {t("installApp")}
          </Button>
        ) : (
          openPage
        )}
      </div>
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
        <p className="text-sm leading-relaxed text-ink-soft">{t("installOpenPhone")}</p>
        <p className="break-all font-mono text-xs text-prussian">{INSTALL_URL}</p>
        <div className="flex flex-wrap gap-2">
          {openPage}
          {onPublicHost() || prompt ? (
            <Button variant="outline" onClick={() => void install()}>
              <Download className="size-4" />
              {t("installApp")}
            </Button>
          ) : null}
        </div>
        {hint ? <p className="text-sm text-ink-soft">{t("installManual")}</p> : null}
      </CardContent>
    </Card>
  );
}
