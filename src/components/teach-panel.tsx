import { RichText } from "@/components/rich-text";
import { useT } from "@/components/t";
import { Badge } from "@/components/ui/badge";
import type { Question } from "@/lib/types";

const LETTERS = ["A", "B", "C", "D"] as const;

export function TeachPanel({
  q,
  chosen,
  showChoices = true,
}: {
  q: Question;
  chosen: number | null;
  showChoices?: boolean;
}) {
  const { t, x } = useT();
  const answered = chosen !== null && chosen !== undefined;
  const ok = answered && chosen === q.answer;

  return (
    <div className="space-y-3 rounded-lg bg-bg-warm p-4">
      <div className="flex flex-wrap items-center gap-2">
        {!answered ? (
          <Badge>{t("unanswered")}</Badge>
        ) : ok ? (
          <Badge tone="sage">{t("correct")}</Badge>
        ) : (
          <Badge tone="brick">{t("wrong")}</Badge>
        )}
        {q.predicted ? <Badge tone="amber">{t("predictedBadge")}</Badge> : null}
        {q.difficulty === "jrf" ? <Badge tone="prussian">{t("jrfLevel")}</Badge> : null}
      </div>

      {showChoices ? (
        <div className="space-y-1 text-sm">
          {answered ? (
            <p>
              <span className="text-muted">{t("yourAnswer")}: </span>
              <span className={ok ? "text-sage" : "text-brick"}>
                {LETTERS[chosen]} · {x(q.options[chosen]!)}
              </span>
            </p>
          ) : (
            <p className="text-muted">{t("blank")}</p>
          )}
          <p>
            <span className="text-muted">{t("rightAnswer")}: </span>
            <span className="text-sage">
              {LETTERS[q.answer]} · {x(q.options[q.answer])}
            </span>
          </p>
        </div>
      ) : null}

      <TeachBlock title={t("explanation")} body={x(q.explain)} />
      <TeachBlock title={t("whyWrong")} body={x(q.trap)} />
      <TeachBlock title={t("howToFix")} body={x(q.fix)} />
    </div>
  );
}

export function TeachBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-prussian">{title}</p>
      <RichText text={body} className="space-y-2" />
    </div>
  );
}
