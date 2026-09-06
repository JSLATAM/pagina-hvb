import type { Metadata } from "next";
import { getEnabledServices } from "@/data/services";
import { getPageTitle } from "@/lib/seo";
import { PageIntro } from "@/components/layout/page-intro";
import { ServiceCard } from "@/components/services/service-card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Servicios"),
  description:
    "Servicios de Medicina Veterinaria en Hospital Veterinario Bilbao: urgencias 24 horas, hospitalización, cirugía, laboratorio e imagenología en Providencia.",
};

export default function ServicesPage() {
  const items = getEnabledServices();

  return (
    <>
      <PageIntro
        eyebrow="Servicios"
        title="Servicios de Medicina Veterinaria organizados por necesidad clínica."
        description="Publicamos solo los servicios confirmados. El resto de la arquitectura queda lista para activarse cuando el hospital lo indique."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Servicios" },
        ]}
      />
      <Container className="grid gap-5 py-14 sm:grid-cols-2 sm:py-16 xl:grid-cols-3">
        {items.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Container>
    </>
  );
}
