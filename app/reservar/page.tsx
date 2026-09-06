import type { Metadata } from "next";
import { getEnabledServices } from "@/data/services";
import { getEnabledTeam } from "@/data/team";
import { getPageTitle } from "@/lib/seo";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Reservar hora"),
  description:
    "Reserva hora en Hospital Veterinario Bilbao, clínica veterinaria 24 horas en Providencia. La agenda en línea se conectará cuando exista el sistema de citas.",
};

const steps = [
  "Servicio",
  "Profesional",
  "Fecha",
  "Hora",
  "Datos del tutor",
  "Datos del paciente",
  "Confirmación",
];

export default function BookingPage() {
  const services = getEnabledServices();
  const professionals = getEnabledTeam();

  return (
    <>
      <PageIntro
        eyebrow="Reserva"
        title="Agenda preparada para conectarse al sistema del hospital."
        description="Este flujo está listo para API, widget, iframe o agenda propia. Mientras no exista un motor real, no mostramos disponibilidad."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Reservar" },
        ]}
      />
      <Container className="py-14 sm:py-16">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-line bg-white px-4 py-5"
            >
              <span className="font-heading text-xs tracking-[0.16em] text-turquoise-dark uppercase">
                Paso {index + 1}
              </span>
              <p className="mt-2 font-heading font-semibold text-navy">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm leading-7 text-muted">
          Servicios habilitados en la arquitectura: {services.length}.
          Profesionales publicados: {professionals.length}. La confirmación de
          una hora real se activará cuando exista la integración.
        </p>
      </Container>
    </>
  );
}
