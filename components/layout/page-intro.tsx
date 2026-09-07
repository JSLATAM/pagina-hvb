import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/breadcrumbs";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: ReactNode;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
}: PageIntroProps) {
  return (
    <section className="border-b border-line bg-light">
      <Container className="py-8 sm:py-12 lg:py-16">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow ? (
          <p className="mt-5 font-heading text-[0.65rem] font-semibold tracking-[0.18em] text-steel uppercase sm:mt-6 sm:text-xs sm:tracking-[0.2em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8 lg:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </section>
  );
}
