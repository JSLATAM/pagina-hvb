import { Phone, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { getDirectionsUrl, getPhoneHref } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function EmergencyBar() {
  if (!site.emergencyBar.enabled) {
    return null;
  }

  const phoneHref = getPhoneHref() ?? "/contacto";
  const directionsHref = getDirectionsUrl() ?? "/contacto";
  const message = site.emergency24h
    ? "Urgencias Veterinarias 24/7"
    : "¿Tienes una urgencia veterinaria?";

  return (
    <div className="bg-dark-navy text-white">
      <Container className="flex min-h-[var(--hvb-emergency-bar-height)] items-center justify-between gap-2 py-1.5 sm:gap-3">
        <p className="flex min-w-0 items-center gap-2 text-xs sm:gap-3 sm:text-sm">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise"
          />
          <span className="truncate font-heading tracking-[0.04em]">{message}</span>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            href={phoneHref}
            event="click_llamar"
            variant="primary"
            size="sm"
            className="h-9 px-3 sm:h-10 sm:px-4"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sm:hidden">Llamar</span>
            <span className="hidden sm:inline">Llamar ahora</span>
          </Button>
          <Button
            href={directionsHref}
            event="click_como_llegar"
            variant="inverse"
            size="sm"
            className="hidden h-10 md:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Cómo llegar
          </Button>
        </div>
      </Container>
    </div>
  );
}
