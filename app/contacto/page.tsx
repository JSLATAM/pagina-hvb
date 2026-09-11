import type { Metadata } from "next";
import { site } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { getDirectionsUrl, getPhoneHref, getPhoneLabel, getWhatsAppUrl } from "@/lib/contact";
import { getPageTitle } from "@/lib/seo";
import { ContactForm } from "@/components/contact/contact-form";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Contacto"),
  description:
    "Contacto del Hospital Veterinario Bilbao, clínica veterinaria en Francisco Bilbao 2941, Providencia. Teléfono y WhatsApp +56 9 9000 2944.",
};

export default function ContactPage() {
  const phoneHref = getPhoneHref() ?? undefined;
  const whatsappHref = getWhatsAppUrl() ?? undefined;
  const directionsHref = getDirectionsUrl() ?? undefined;

  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Estamos para orientar la atención."
        description="Usa el formulario o reserva una hora. Por ahora no ofrecemos urgencias ni atención 24 horas."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Contacto" },
        ]}
        actions={
          <>
            <Button href={getBookingUrl()} event="click_reservar">
              Reservar hora
            </Button>
            <Button href="/hospital" variant="outline">
              Conocer el hospital
            </Button>
          </>
        }
      />
      <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-16">
        <aside className="space-y-6">
          <div>
            <h2 className="font-heading text-xl font-semibold text-navy">
              {site.name}
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Dirección</dt>
                <dd className="mt-1 text-navy">{site.address}</dd>
              </div>
              <div>
                <dt className="text-muted">{getPhoneLabel()}</dt>
                <dd className="mt-1 text-navy">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-muted">Correo</dt>
                <dd className="mt-1 text-navy">{site.email}</dd>
              </div>
              <div>
                <dt className="text-muted">Horario</dt>
                <dd className="mt-1 text-navy">{site.hours}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-wrap gap-2">
            {phoneHref ? (
              <Button href={phoneHref} event="click_llamar" variant="outline" size="sm">
                Llamar
              </Button>
            ) : null}
            {whatsappHref ? (
              <Button href={whatsappHref} event="click_whatsapp" variant="outline" size="sm">
                WhatsApp
              </Button>
            ) : null}
            {directionsHref ? (
              <Button href={directionsHref} event="click_como_llegar" variant="outline" size="sm">
                Cómo llegar
              </Button>
            ) : null}
          </div>
        </aside>
        <ContactForm />
      </Container>
    </>
  );
}
