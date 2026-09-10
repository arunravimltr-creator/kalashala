import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FACT_SHEETS, GLOSSARY } from "@/data/glossary";

export const Route = createFileRoute("/glossary")({ component: GlossaryPage });

function GlossaryPage() {
  const { t, x } = useT();
  const [q, setQ] = useState("");
  const [paper, setPaper] = useState<"all" | "p1" | "va">("all");

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      if (paper !== "all" && g.paper !== paper) return false;
      if (!needle) return true;
      const blob = `${g.term.en} ${g.term.ml} ${g.def.en} ${g.def.ml}`.toLowerCase();
      return blob.includes(needle);
    });
  }, [q, paper]);

  return (
    <div className="space-y-8">
      <PageHero kicker={t("navGlossary")} title={t("navGlossary")} lead={t("glossaryLead")} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block min-w-0 flex-1 text-sm text-muted">
          {t("searchTerms")}
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="mt-1 h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink"
            placeholder="vyapti, tenebrism, wasli…"
          />
        </label>
        <label className="block text-sm text-muted sm:w-48">
          {t("choosePaper")}
          <select
            className="mt-1 h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink"
            value={paper}
            onChange={(e) => setPaper(e.target.value as "all" | "p1" | "va")}
          >
            <option value="all">{t("allPapers")}</option>
            <option value="p1">{t("paper1")}</option>
            <option value="va">{t("paperVa")}</option>
          </select>
        </label>
      </div>

      <p className="text-xs text-muted">
        {rows.length} / {GLOSSARY.length}
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {rows.map((g) => (
          <Card key={g.term.en}>
            <CardContent className="space-y-2 pt-5">
              <div className="flex items-start justify-between gap-2">
                <p className="font-display text-lg leading-snug">{x(g.term)}</p>
                <Badge>{g.paper === "p1" ? t("paper1") : t("paperVa")}</Badge>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{x(g.def)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {rows.length === 0 ? <p className="text-sm text-ink-soft">{t("noGlossaryHit")}</p> : null}

      <section className="space-y-3">
        <h2 className="font-display text-xl">{t("factSheets")}</h2>
        {FACT_SHEETS.map((sheet) => (
          <Card key={sheet.id}>
            <CardContent className="space-y-3 pt-5">
              <h3 className="font-display text-lg">{x(sheet.title)}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {sheet.rows.map((row) => (
                      <tr key={row.k.en} className="border-t border-line first:border-t-0">
                        <td className="py-2 pr-3 font-medium">{x(row.k)}</td>
                        <td className="py-2 text-ink-soft">{x(row.v)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
