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
      <Container className="flex flex-col items-start justify-between gap-3 py-2.5 sm:flex-row sm:items-center">
        <p className="flex items-center gap-3 text-sm">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise"
          />
          <span className="font-heading tracking-[0.04em]">{message}</span>
        </p>
        <div className="flex flex-wrap gap-2">
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
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Cómo llegar
          </Button>
        </div>
      </Container>
    </div>
  );
}
