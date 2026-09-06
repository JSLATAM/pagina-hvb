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
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow ? (
          <p className="mt-6 font-heading text-xs font-semibold tracking-[0.2em] text-steel uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </section>
  );
}
