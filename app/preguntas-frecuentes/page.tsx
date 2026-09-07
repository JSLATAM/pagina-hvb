import type { Metadata } from "next";
import { generalFaqs } from "@/data/faqs";
import { getPageTitle } from "@/lib/seo";
import { EmptyState } from "@/components/ui/empty-state";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Preguntas frecuentes"),
  description:
    "Preguntas frecuentes de Hospital Veterinario Bilbao. Se publicarán cuando el hospital las valide.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pacientes"
        title="Preguntas frecuentes"
        description="Esta sección se completa con respuestas revisadas por el hospital. No inventamos políticas de horarios, valores ni protocolos."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Preguntas frecuentes" },
        ]}
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        {generalFaqs.length === 0 ? (
          <EmptyState
            title="Preguntas por validar"
            description="Cuando existan respuestas oficiales, aparecerán aquí con un marcado FAQ para búsqueda."
            action={
              <Button href="/contacto" variant="outline">
                Enviar una consulta
              </Button>
            }
          />
        ) : null}
      </Container>
    </>
  );
}
