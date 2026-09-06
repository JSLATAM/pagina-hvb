import type { Metadata } from "next";
import { getBookingUrl } from "@/lib/booking";
import { getPageTitle } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: getPageTitle("Hospital Veterinario 24 Horas"),
  description:
    "Conoce Hospital Veterinario Bilbao, clínica veterinaria 24 horas en Providencia. Medicina Veterinaria integral, urgencias y atención continua.",
};

export default function HospitalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hospital"
        title="Un hospital pensado para cuidar a quienes forman parte de tu familia."
        description="Hospital Veterinario Bilbao nace con el propósito de entregar Medicina Veterinaria integral, profesional y cercana, con funcionamiento continuo las 24 horas y el paciente en el centro de cada decisión médica."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Hospital" },
        ]}
        actions={
          <>
            <Button href={getBookingUrl()} event="click_reservar">
              Reservar hora
            </Button>
            <Button href="/equipo" variant="outline">
              Conocer al equipo
            </Button>
          </>
        }
      />
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-navy">
            Medicina Veterinaria responsable y continuidad clínica
          </h2>
          <p className="mt-4 leading-8 text-muted">
            Como hospital veterinario y clínica veterinaria 24 horas, el trabajo
            se organiza en torno al diagnóstico, las urgencias y el
            acompañamiento. Cada decisión busca claridad para el tutor y un
            cuidado consistente para el paciente.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-navy">
            Infraestructura al servicio del equipo
          </h2>
          <p className="mt-4 leading-8 text-muted">
            Las fotografías de fachada, recepción, consultas, hospitalización,
            pabellón, laboratorio e imagenología se incorporarán cuando existan
            registros reales del recinto. No usamos imágenes genéricas para
            simular una infraestructura que aún no está documentada.
          </p>
        </div>
      </Container>
    </>
  );
}
