export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="space-y-2">
      {kicker ? <p className="text-[0.7rem] uppercase tracking-[0.18em] text-subtle">{kicker}</p> : null}
      <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
      {lead ? <p className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{lead}</p> : null}
    </header>
  );
}
