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
    <div className="h-[var(--hvb-emergency-bar-height)] bg-dark-navy text-white">
      <Container className="flex h-full items-center justify-between gap-3">
        <p className="flex min-w-0 items-center gap-3 text-sm">
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
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Llamar ahora
          </Button>
          <Button
            href={directionsHref}
            event="click_como_llegar"
            variant="inverse"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Cómo llegar
          </Button>
        </div>
      </Container>
    </div>
  );
}
