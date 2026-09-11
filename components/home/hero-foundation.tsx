import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { getPhoneHref } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function HeroFoundation() {
  const phoneHref = getPhoneHref() ?? "/contacto";

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(86_225_210_/_0.18)_0%,transparent_42%),radial-gradient(circle_at_bottom_left,rgb(13_79_139_/_0.55)_0%,transparent_48%)]"
      />
      <Container className="relative grid min-h-[28rem] items-center gap-10 py-16 sm:min-h-[32rem] sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <p className="font-heading text-sm font-medium text-turquoise">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hospital veterinario en Providencia
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            {site.tagline} Consulta, hospitalización, cirugía y diagnóstico,
            con un plan claro para cada paciente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={getBookingUrl()}
              event="click_reservar"
              size="lg"
              className="w-full sm:w-auto"
            >
              Reservar hora
            </Button>
            <Button
              href={phoneHref}
              event="click_llamar"
              variant="inverse"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-full border border-white/10"
          />
          <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full bg-dark-navy shadow-soft sm:h-72 sm:w-72">
            <Logo variant="hero" href={null} priority />
            <p className="mt-3 font-heading text-sm font-semibold tracking-wide text-turquoise">
              Providencia
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
