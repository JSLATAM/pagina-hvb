import { getFeaturedServices } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServiceShowcase() {
  const featured = getFeaturedServices();

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          title="Atención clínica confirmada"
          description="Cuatro líneas de trabajo que ya están activas. El resto de la oferta se publica cuando el hospital la valida."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} featured />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/servicios" variant="outline">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </section>
  );
}
