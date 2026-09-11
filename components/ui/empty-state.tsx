import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-line bg-light px-6 py-12 text-center",
        className,
      )}
    >
      <h2 className="font-heading text-xl font-semibold text-navy">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  );
}
