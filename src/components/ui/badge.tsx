import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badge = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      tone: {
        muted: "bg-chip text-ink-soft",
        prussian: "bg-prussian text-prussian-fg",
        sage: "bg-sage/15 text-sage",
        brick: "bg-brick/12 text-brick",
        amber: "bg-amber/12 text-amber",
        ink: "bg-ink text-surface",
      },
    },
    defaultVariants: { tone: "muted" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badge>) {
  return <span className={cn(badge({ tone, className }))} {...props} />;
}
