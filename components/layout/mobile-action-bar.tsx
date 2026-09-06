"use client";

import { usePathname } from "next/navigation";
import { CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import { getBookingUrl } from "@/lib/booking";
import { getDirectionsUrl, getPhoneHref, getWhatsAppUrl } from "@/lib/contact";
import { track } from "@/lib/analytics";

export function MobileActionBar() {
  const pathname = usePathname();
  const isEmergency = pathname.startsWith("/urgencias");
  const phoneHref = getPhoneHref() ?? "/contacto";
  const whatsappHref = getWhatsAppUrl() ?? "/contacto";
  const directionsHref = getDirectionsUrl() ?? "/contacto";

  const actions = isEmergency
    ? [
        {
          href: phoneHref,
          label: "Llamar",
          icon: Phone,
          event: "click_llamar" as const,
        },
        {
          href: directionsHref,
          label: "Cómo llegar",
          icon: MapPin,
          event: "click_como_llegar" as const,
        },
      ]
    : [
        {
          href: phoneHref,
          label: "Llamar",
          icon: Phone,
          event: "click_llamar" as const,
        },
        {
          href: whatsappHref,
          label: "WhatsApp",
          icon: MessageCircle,
          event: "click_whatsapp" as const,
        },
        {
          href: getBookingUrl(),
          label: "Reservar",
          icon: CalendarDays,
          event: "click_reservar" as const,
        },
      ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur-md lg:hidden">
      <nav
        aria-label="Acciones rápidas"
        className="mx-auto grid min-h-[var(--hvb-action-bar-height)] max-w-lg grid-flow-col"
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <a
              key={action.label}
              href={action.href}
              onClick={() => track(action.event, { source: "mobile-bar" })}
              className="flex flex-col items-center justify-center gap-1 px-3 text-[0.68rem] font-heading font-semibold tracking-[0.08em] uppercase text-navy"
            >
              <Icon className="h-4 w-4 text-turquoise-dark" aria-hidden="true" />
              {action.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
