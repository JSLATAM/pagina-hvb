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
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgb(234_242_248)_0%,transparent_62%)] sm:block"
      />
      <Container className="relative grid items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="min-w-0">
          <p className="font-heading text-[0.65rem] font-semibold tracking-[0.18em] text-steel uppercase sm:text-xs sm:tracking-[0.22em]">
            {site.name}
          </p>
          <h1 className="mt-3 max-w-xl font-heading text-[1.7rem] leading-tight font-semibold tracking-tight text-navy sm:mt-4 sm:text-4xl sm:leading-[1.15] lg:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            {site.heroText}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button
              href={getBookingUrl()}
              event="click_reservar"
              size="lg"
              className="w-full sm:w-auto"
            >
              Reservar hora
            </Button>
            <Button
              href="/urgencias"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Urgencias
            </Button>
            <Button
              href="/hospital"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              Conocer el hospital
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden sm:overflow-visible">
          <div
            className="absolute -inset-6 hidden rounded-full border border-line/70 sm:block"
            aria-hidden="true"
          />
          <div className="relative flex min-h-56 items-center justify-center rounded-[1.5rem] bg-light-blue sm:min-h-[22rem] sm:rounded-[2rem]">
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
