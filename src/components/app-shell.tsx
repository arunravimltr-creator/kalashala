import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ClipboardList,
  Ellipsis,
  Home,
  LineChart,
  Menu,
  Target,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useT } from "@/components/t";
import { cycleFromDate, cycleLabel } from "@/lib/cycle";
import { useKalashala } from "@/lib/store";
import { cn } from "@/lib/utils";

const MAIN = [
  { to: "/", key: "navHome" as const, icon: Home },
  { to: "/learn", key: "navLearn" as const, icon: BookOpen },
  { to: "/practice", key: "navPractice" as const, icon: ClipboardList },
  { to: "/mock", key: "navMocks" as const, icon: Target },
] as const;

const MORE = [
  { to: "/predicted", key: "navPredicted" as const },
  { to: "/mistakes", key: "navMistakes" as const },
  { to: "/methods", key: "navMethods" as const },
  { to: "/progress", key: "navProgress" as const },
  { to: "/exam", key: "navExam" as const },
  { to: "/updates", key: "navUpdates" as const },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const { t, lang } = useT();
  const setLang = useKalashala((s) => s.setLang);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [more, setMore] = useState(false);
  const cycle = cycleFromDate();

  useEffect(() => {
    void useKalashala.persist.rehydrate();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "ml" ? "ml" : "en";
  }, [lang]);

  useEffect(() => {
    setMore(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-prussian focus:px-3 focus:py-2 focus:text-prussian-fg"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-prussian font-display text-sm font-semibold text-prussian-fg">
              K
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.05rem] font-semibold leading-none tracking-tight">
                {t("appName")}
              </span>
              <span className="mt-0.5 hidden truncate text-[0.65rem] tracking-wide text-muted sm:block">
                {t("tagline")}
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-1.5">
            <p className="mr-1 hidden text-[0.65rem] uppercase tracking-[0.14em] text-subtle md:block">
              {cycleLabel(cycle, lang)}
            </p>
            <div className="flex rounded-full border border-line bg-surface p-0.5">
              <button
                type="button"
                className={cn(
                  "h-8 rounded-full px-2.5 text-xs font-medium",
                  lang === "en" ? "bg-ink text-surface" : "text-muted",
                )}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={cn(
                  "h-8 rounded-full px-2.5 text-xs font-medium",
                  lang === "ml" ? "bg-ink text-surface" : "text-muted",
                )}
                onClick={() => setLang("ml")}
              >
                മല
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={t("more")}
              onClick={() => setMore((v) => !v)}
            >
              {more ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-52 shrink-0 flex-col gap-1 overflow-y-auto border-r border-line px-3 py-5 lg:flex">
          {MAIN.map((item) => (
            <NavItem key={item.to} to={item.to} label={t(item.key)} icon={item.icon} pathname={pathname} />
          ))}
          <p className="mb-1 mt-5 px-2 text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
            {t("more")}
          </p>
          {MORE.map((item) => (
            <NavItem key={item.to} to={item.to} label={t(item.key)} pathname={pathname} />
          ))}
        </aside>

        <main id="main" className="min-w-0 flex-1 px-4 py-6 pb-24 lg:px-8 lg:pb-10">
          {children}
        </main>
      </div>

      {more ? (
        <div className="fixed inset-0 z-40 bg-ink/40 lg:hidden" onClick={() => setMore(false)}>
          <div
            className="absolute right-0 top-14 flex h-[calc(100dvh-3.5rem)] w-[min(20rem,88vw)] flex-col gap-1 overflow-y-auto border-l border-line bg-surface p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {MORE.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-chip"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {MAIN.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex h-14 flex-col items-center justify-center gap-0.5 text-[0.65rem] font-medium",
                    active ? "text-prussian" : "text-muted",
                  )}
                >
                  <Icon className="size-5" strokeWidth={active ? 2.2 : 1.8} />
                  {t(item.key)}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setMore(true)}
              className="flex h-14 w-full flex-col items-center justify-center gap-0.5 text-[0.65rem] font-medium text-muted"
            >
              <Ellipsis className="size-5" strokeWidth={1.8} />
              {t("more")}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function NavItem({
  to,
  label,
  icon: Icon,
  pathname,
}: {
  to: string;
  label: string;
  icon?: typeof Home;
  pathname: string;
}) {
  const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
  return (
    <Link
      to={to}
      className={cn(
        "flex h-10 items-center gap-2 rounded-md px-2.5 text-sm font-medium",
        active ? "bg-chip text-ink" : "text-ink-soft hover:bg-chip/70",
      )}
    >
      {Icon ? <Icon className="size-4" strokeWidth={1.8} /> : <LineChart className="size-4 opacity-0" />}
      {label}
    </Link>
  );
}
