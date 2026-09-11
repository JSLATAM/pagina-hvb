import { CalendarDays, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { getDirectionsUrl } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CtaBanner() {
  const directionsHref = getDirectionsUrl() ?? "/contacto";

  return (
    <section className="bg-navy">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          tone="light"
          title="Reserva una hora en Providencia"
          description={`${site.name} está en ${site.address}. Agenda una consulta o escríbenos para orientar la atención.`}
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={getBookingUrl()} event="click_reservar" size="lg">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Reservar hora
          </Button>
          <Button
            href={directionsHref}
            event="click_como_llegar"
            variant="inverse"
            size="lg"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Cómo llegar
          </Button>
        </div>
      </Container>
    </section>
  );
}
