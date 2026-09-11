import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  tone?: "default" | "light";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  as: Tag = "h2",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <Tag
        className={cn(
          "font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Tag>
      <span
        aria-hidden="true"
        className={cn(
          "mt-5 block h-1 w-12 rounded-full bg-turquoise",
          centered && "mx-auto",
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-6 text-base leading-8 sm:text-lg",
            tone === "light" ? "text-white/75" : "text-muted",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
