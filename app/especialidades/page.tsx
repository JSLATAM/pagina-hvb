import type { Metadata } from "next";
import { getEnabledSpecialties } from "@/data/specialties";
import { getPageTitle } from "@/lib/seo";
import { EmptyState } from "@/components/ui/empty-state";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Especialidades"),
  description:
    "Especialidades de Medicina Veterinaria en Hospital Veterinario Bilbao, clínica veterinaria 24 horas en Providencia.",
};

export default function SpecialtiesPage() {
  const items = getEnabledSpecialties();

  return (
    <>
      <PageIntro
        eyebrow="Especialidades"
        title="Líneas clínicas que se publican cuando están confirmadas."
        description="La arquitectura de especialidades ya está lista. No mostramos un equipo o un alcance que el hospital aún no ha validado."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Especialidades" },
        ]}
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        {items.length === 0 ? (
          <EmptyState
            title="Especialidades por confirmar"
            description="Cuando el hospital indique las líneas activas y los profesionales asociados, esta página las mostrará con su descripción y un camino claro a reserva."
            action={
              <Button href="/contacto" variant="outline">
                Escribir al hospital
              </Button>
            }
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((specialty) => (
              <article
                key={specialty.slug}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h2 className="font-heading text-lg font-semibold text-navy">
                  {specialty.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {specialty.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
