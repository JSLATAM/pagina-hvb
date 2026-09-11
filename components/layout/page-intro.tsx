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
  title,
  description,
  breadcrumbs,
  actions,
}: PageIntroProps) {
  return (
    <section className="bg-white">
      <Container className="py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 text-center sm:mt-10">
          <h1 className="mx-auto max-w-4xl font-heading text-3xl leading-tight font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-1 w-12 rounded-full bg-turquoise"
          />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {actions}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
