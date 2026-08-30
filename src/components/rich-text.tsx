export function RichText({ text, className }: { text: string; className?: string }) {
  const paras = text.split("\n\n");
  return (
    <div className={className ?? "space-y-3"}>
      {paras.map((p, i) => (
        <p key={i} className="text-pretty leading-relaxed text-ink-soft">
          {p.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="font-medium text-ink">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
