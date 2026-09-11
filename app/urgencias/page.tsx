import type { Metadata } from "next";
import { getPageTitle } from "@/lib/seo";
import { EmptyState } from "@/components/ui/empty-state";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Urgencias"),
  description:
    "Hospital Veterinario Bilbao no ofrece urgencias ni atención 24 horas por ahora. Reserva una hora o escríbenos para orientar la atención.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmergencyPage() {
  return (
    <>
      <PageIntro
        title="Urgencias no disponibles por ahora"
        description="No publicamos un servicio que el hospital aún no ofrece. Cuando exista atención de urgencia o un horario continuo, esta página lo dirá con claridad."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Urgencias" },
        ]}
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        <EmptyState
          title="Este servicio no está activo"
          description="Si el paciente necesita atención inmediata, acude a un centro de urgencias veterinarias que esté operando. Para consultas programadas, reserva una hora o escríbenos."
          action={
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/reservar">Reservar hora</Button>
              <Button href="/contacto" variant="outline">
                Contacto
              </Button>
            </div>
          }
        />
      </Container>
    </>
  );
}
