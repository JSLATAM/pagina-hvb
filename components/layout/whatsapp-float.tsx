"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";
import { track } from "@/lib/analytics";

export function WhatsAppFloat() {
  const href = getWhatsAppUrl() ?? "/contacto";

  return (
    <a
      href={href}
      onClick={() => {
        track("click_whatsapp", { source: "float" });
      }}
      className="group fixed right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-turquoise shadow-soft hover:bg-dark-navy max-lg:bottom-[calc(var(--hvb-action-bar-height)+1rem)] lg:right-6 lg:bottom-6"
      aria-label="Escribir por WhatsApp"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-dark-navy px-3 py-1.5 text-xs whitespace-nowrap text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 xl:block">
        Escríbenos por WhatsApp
      </span>
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
