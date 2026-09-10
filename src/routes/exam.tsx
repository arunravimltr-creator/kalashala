import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CUTOFFS, JRF_TARGET, QUALIFYING_PCT } from "@/lib/cycle";
import { ageOn, DEC_2026_RECKON, jrfCeiling, jrfEligible } from "@/lib/eligibility";
import { useKalashala } from "@/lib/store";
import type { Category } from "@/lib/types";

export const Route = createFileRoute("/exam")({ component: ExamPage });

const CATS: Category[] = ["UR", "EWS", "OBC", "SC", "ST"];

function ExamPage() {
  const { t, x } = useT();
  const category = useKalashala((s) => s.category);
  const setCategory = useKalashala((s) => s.setCategory);
  const birthDate = useKalashala((s) => s.birthDate);
  const setBirthDate = useKalashala((s) => s.setBirthDate);
  const woman = useKalashala((s) => s.woman);
  const setWoman = useKalashala((s) => s.setWoman);
  const pwd = useKalashala((s) => s.pwd);
  const setPwd = useKalashala((s) => s.setPwd);
  const thirdGender = useKalashala((s) => s.thirdGender);
  const setThirdGender = useKalashala((s) => s.setThirdGender);

  const flags = { woman, pwd, thirdGender };
  const age = birthDate ? ageOn(birthDate, DEC_2026_RECKON) : null;
  const ceiling = jrfCeiling(category, flags);
  const jrfOk = age !== null ? jrfEligible(age, category, flags) : null;

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

      <Card className="border-prussian/30">
        <CardContent className="space-y-4 pt-5">
          <div className="space-y-1">
            <h2 className="font-display text-xl">{t("eligibilityTitle")}</h2>
            <p className="text-sm leading-relaxed text-ink-soft">{t("eligibilityLead")}</p>
          </div>
          <label className="block max-w-xs text-sm text-muted">
            {t("birthDate")}
            <input
              type="date"
              className="mt-1 h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink"
              value={birthDate}
              max="2026-12-01"
              min="1940-01-01"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </label>
          <p className="text-xs text-muted">{t("birthHint")}</p>
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
          <div className="flex flex-col gap-2 text-sm">
            <label className="flex min-h-11 items-center gap-2">
              <input type="checkbox" checked={woman} onChange={(e) => setWoman(e.target.checked)} />
              {t("womanFlag")}
            </label>
            <label className="flex min-h-11 items-center gap-2">
              <input type="checkbox" checked={pwd} onChange={(e) => setPwd(e.target.checked)} />
              {t("pwdFlag")}
            </label>
            <label className="flex min-h-11 items-center gap-2">
              <input type="checkbox" checked={thirdGender} onChange={(e) => setThirdGender(e.target.checked)} />
              {t("thirdGenderFlag")}
            </label>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Card className="bg-chip/60 shadow-none">
              <CardContent className="space-y-2 pt-5">
                <Badge tone="sage">{t("netAp")}</Badge>
                <p className="text-sm leading-relaxed text-ink-soft">{t("netAlways")}</p>
              </CardContent>
            </Card>
            <Card className="bg-chip/60 shadow-none">
              <CardContent className="space-y-2 pt-5">
                <Badge tone={jrfOk === false ? "brick" : "prussian"}>{t("jrf")}</Badge>
                {age === null ? (
                  <p className="text-sm leading-relaxed text-ink-soft">{t("enterDob")}</p>
                ) : (
                  <>
                    <p className="text-sm tabular-nums text-ink">
                      {t("ageOnReckon")}: {age} {t("years")}
                    </p>
                    <p className="text-sm tabular-nums text-ink">
                      {t("jrfCeiling")}: {ceiling} {t("years")}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-soft">{jrfOk ? t("jrfYes") : t("jrfNo")}</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-lg">{t("twoTrack")}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{t("trackNet")}</p>
            <p className="text-sm leading-relaxed text-ink-soft">{t("trackJrf")}</p>
            <p className="text-xs text-muted">{t("officialSource")}</p>
          </div>
        </CardContent>
      </Card>

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
        <Button variant="ghost" asChild>
          <Link to="/updates">{t("navUpdates")}</Link>
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
