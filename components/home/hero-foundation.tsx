import { site } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function HeroFoundation() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgb(234_242_248)_0%,transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full border border-line/80"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="font-heading text-xs font-semibold tracking-[0.22em] text-steel uppercase">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-navy sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
            {site.heroText}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={getBookingUrl()} event="click_reservar" size="lg">
              Reservar hora
            </Button>
            <Button href="/urgencias" variant="secondary" size="lg">
              Urgencias
            </Button>
            <Button href="/hospital" variant="ghost" size="lg">
              Conocer el hospital
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full border border-line/70" aria-hidden="true" />
          <div className="relative flex min-h-[22rem] items-center justify-center rounded-[2rem] bg-light-blue">
            <Logo variant="institutional" href={null} priority />
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            Espacio reservado para fotografía clínica del hospital.
          </p>
        </div>
      </Container>
    </section>
  );
}
