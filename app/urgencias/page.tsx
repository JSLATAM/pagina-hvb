import type { Metadata } from "next";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { getDirectionsUrl, getPhoneHref, getPhoneLabel, getWhatsAppUrl } from "@/lib/contact";
import { getPageTitle } from "@/lib/seo";
import { ViewTracker } from "@/components/layout/view-tracker";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Urgencias Veterinarias 24 Horas"),
  description:
    "Urgencias veterinarias 24 horas en Hospital Veterinario Bilbao, clínica veterinaria de atención continua en Providencia. Llama o acude a Francisco Bilbao 2941.",
};

export default function EmergencyPage() {
  const phoneHref = getPhoneHref() ?? "/contacto";
  const whatsappHref = getWhatsAppUrl() ?? "/contacto";
  const directionsHref = getDirectionsUrl() ?? "/contacto";

  return (
    <Container className="py-12 sm:py-16">
      <ViewTracker event="view_urgencias" />
      <p className="font-heading text-xs font-semibold tracking-[0.2em] text-steel uppercase">
        Atención continua 24 horas
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        Urgencias Veterinarias
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Si el paciente está grave o el cuadro avanza rápido, prioriza el
        contacto directo. El hospital funciona las 24 horas, todos los días,
        para urgencias veterinarias en Providencia.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={phoneHref} event="click_llamar" size="lg">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Llamar ahora
        </Button>
        <Button href={whatsappHref} event="click_whatsapp" variant="secondary" size="lg">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </Button>
        <Button href={directionsHref} event="click_como_llegar" variant="outline" size="lg">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Cómo llegar
        </Button>
      </div>

      <dl className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
        <div>
          <dt className="text-xs tracking-[0.16em] text-steel uppercase">
            {getPhoneLabel()}
          </dt>
          <dd className="mt-2 text-navy">{site.phone}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-[0.16em] text-steel uppercase">Dirección</dt>
          <dd className="mt-2 text-navy">{site.address}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-[0.16em] text-steel uppercase">Horario</dt>
          <dd className="mt-2 text-navy">{site.hours}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-[0.16em] text-steel uppercase">Correo</dt>
          <dd className="mt-2 text-navy">{site.email}</dd>
        </div>
      </dl>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-heading text-2xl font-semibold text-navy">
          Recomendaciones básicas
        </h2>
        <ul className="mt-4 space-y-3 leading-7 text-muted">
          <li>Mantén al paciente en un lugar seguro y evita forzar movimientos.</li>
          <li>Si puedes, llama antes de salir para orientar el traslado.</li>
          <li>Lleva ficha, exámenes previos o el nombre de medicamentos recientes.</li>
          <li>No administres fármacos humanos ni medicación sin indicación.</li>
        </ul>
      </section>
    </Container>
  );
}
