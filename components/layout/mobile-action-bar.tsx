"use client";

import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { getBookingUrl } from "@/lib/booking";
import { getPhoneHref, getWhatsAppUrl } from "@/lib/contact";
import { track } from "@/lib/analytics";

export function MobileActionBar() {
  const phoneHref = getPhoneHref() ?? "/contacto";
  const whatsappHref = getWhatsAppUrl() ?? "/contacto";

  const actions = [
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
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
      <nav
        aria-label="Acciones rápidas"
        className="mx-auto grid h-[var(--hvb-action-bar-height)] max-w-lg grid-flow-col"
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <a
              key={action.label}
              href={action.href}
              onClick={() => track(action.event, { source: "mobile-bar" })}
              className="flex flex-col items-center justify-center gap-1 px-3 text-[0.72rem] font-heading font-semibold text-navy"
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
