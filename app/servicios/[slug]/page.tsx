import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEnabledServices, getServiceBySlug } from "@/data/services";
import { getBookingUrl } from "@/lib/booking";
import { getPhoneHref, getWhatsAppUrl } from "@/lib/contact";
import { getPageTitle } from "@/lib/seo";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getEnabledServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || !service.enabled) {
    return { title: getPageTitle("Servicio") };
  }

  return {
    title: getPageTitle(service.name),
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || !service.enabled) {
    notFound();
  }

  const whatsappHref = getWhatsAppUrl() ?? "/contacto";
  const phoneHref = getPhoneHref() ?? "/contacto";

  return (
    <>
      <PageIntro
        eyebrow="Servicio"
        title={service.name}
        description={service.description}
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { href: "/servicios", label: "Servicios" },
          { label: service.name },
        ]}
        actions={
          <>
            <Button href={getBookingUrl({ service: service.slug })} event="click_reservar">
              Reservar hora
            </Button>
            <Button href={whatsappHref} event="click_whatsapp" variant="outline">
              WhatsApp
            </Button>
            <Button href={phoneHref} event="click_llamar" variant="ghost">
              Llamar
            </Button>
          </>
        }
      />
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-2">
        {service.whenToVisit.length > 0 ? (
          <section>
            <h2 className="font-heading text-2xl font-semibold text-navy">
              Cuándo acudir
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              {service.whenToVisit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {service.includes.length > 0 ? (
          <section>
            <h2 className="font-heading text-2xl font-semibold text-navy">
              Qué contempla
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {service.howItWorks.length > 0 ? (
          <section className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-semibold text-navy">
              Cómo funciona
            </h2>
            <ol className="mt-4 space-y-2 text-muted">
              {service.howItWorks.map((item, index) => (
                <li key={item}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </section>
        ) : null}
      </Container>
    </>
  );
}
