import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/components/t";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CUTOFFS, JRF_TARGET, QUALIFYING_PCT } from "@/lib/cycle";
import { useKalashala } from "@/lib/store";
import type { Category } from "@/lib/types";

export const Route = createFileRoute("/exam")({ component: ExamPage });

const CATS: Category[] = ["UR", "EWS", "OBC", "SC", "ST"];

function ExamPage() {
  const { t, x } = useT();
  const category = useKalashala((s) => s.category);
  const setCategory = useKalashala((s) => s.setCategory);

  return (
    <div className="space-y-8">
      <PageHero kicker={t("navExam")} title={t("examPattern")} lead={t("examLead")} />

      <section className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardContent className="space-y-2 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("paper1")}</p>
            <p className="font-display text-2xl">{t("paperIHall")}</p>
            <p className="text-sm text-ink-soft">{t("fiveEach")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("paperVa")}</p>
            <p className="font-display text-2xl">{t("paperIIHall")}</p>
            <p className="text-sm text-ink-soft">{t("vaUnits")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-5">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{t("officialPattern")}</p>
            <p className="font-display text-2xl">{t("combinedHall")}</p>
            <p className="text-sm text-ink-soft">{t("noNeg")}</p>
          </CardContent>
        </Card>
      </section>

      <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("hallTogether")}</p>
      <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("officialNote")}</p>
      <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{t("relativeJrf")}</p>

      <label className="block max-w-xs text-sm text-muted">
        {t("category")}
        <select
          className="mt-1 h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          {CATS.map((c) => (
            <option key={c} value={c}>
              {c} · {t("jrf")} {JRF_TARGET[c]}
            </option>
          ))}
        </select>
      </label>

      <CutoffTable
        title={x(CUTOFFS.dec2025.label)}
        jrf={CUTOFFS.dec2025.jrf}
        net={CUTOFFS.dec2025.net}
        t={t}
      />
      <CutoffTable
        title={x(CUTOFFS.june2025.label)}
        jrf={CUTOFFS.june2025.jrf}
        net={CUTOFFS.june2025.net}
        t={t}
      />

      <Card>
        <CardContent className="space-y-3 pt-5">
          <h2 className="font-display text-xl">{t("qualifyingFloor")}</h2>
          <p className="text-sm text-ink-soft">{t("relativeJrf")}</p>
          <ul className="grid gap-1 text-sm sm:grid-cols-5">
            {CATS.map((c) => (
              <li key={c} className="rounded-md bg-chip px-3 py-2">
                <span className="block text-xs text-muted">{c}</span>
                <span className="tabular-nums">{QUALIFYING_PCT[c]}%</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/mock/$id" params={{ id: "combined" }}>
            {t("fullCombined")}
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/methods">{t("navMethods")}</Link>
        </Button>
      </div>
    </div>
  );
}

function CutoffTable({
  title,
  jrf,
  net,
  t,
}: {
  title: string;
  jrf: Record<Category, number>;
  net: Record<Category, number>;
  t: ReturnType<typeof useT>["t"];
}) {
  return (
    <section className="space-y-2">
      <h2 className="font-display text-xl">{title}</h2>
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-chip text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">{t("category")}</th>
              <th className="px-3 py-2 font-medium">{t("jrf")}</th>
              <th className="px-3 py-2 font-medium">{t("netAp")}</th>
              <th className="px-3 py-2 font-medium">{t("target")}</th>
            </tr>
          </thead>
          <tbody>
            {CATS.map((c) => (
              <tr key={c} className="border-t border-line">
                <td className="px-3 py-2">{c}</td>
                <td className="px-3 py-2 tabular-nums">{jrf[c]}</td>
                <td className="px-3 py-2 tabular-nums">{net[c]}</td>
                <td className="px-3 py-2 tabular-nums">{JRF_TARGET[c]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
