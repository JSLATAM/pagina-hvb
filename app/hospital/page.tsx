import type { Metadata } from "next";
import { getBookingUrl } from "@/lib/booking";
import { getPageTitle } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: getPageTitle("Hospital Veterinario en Providencia"),
  description:
    "Conoce Hospital Veterinario Bilbao, clínica veterinaria en Providencia. Medicina Veterinaria integral en Francisco Bilbao 2941.",
};

export default function HospitalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hospital"
        title="Un hospital pensado para cuidar a quienes forman parte de tu familia."
        description="Hospital Veterinario Bilbao nace con el propósito de entregar Medicina Veterinaria integral, profesional y cercana, con el paciente en el centro de cada decisión médica."
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
      <Container className="grid gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:py-16">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Medicina Veterinaria responsable y continuidad clínica
          </h2>
          <span
            aria-hidden="true"
            className="mt-5 block h-1 w-12 rounded-full bg-turquoise"
          />
          <p className="mt-5 leading-8 text-muted">
            Como hospital veterinario en Providencia, el trabajo se organiza
            en torno al diagnóstico, el cuidado del paciente y el
            acompañamiento al tutor. Cada decisión busca claridad y un
            cuidado consistente.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Infraestructura al servicio del equipo
          </h2>
          <span
            aria-hidden="true"
            className="mt-5 block h-1 w-12 rounded-full bg-turquoise"
          />
          <p className="mt-5 leading-8 text-muted">
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
