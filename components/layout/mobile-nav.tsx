"use client";

import Link from "next/link";
import { useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { getPhoneHref, getWhatsAppUrl } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const whatsappHref = getWhatsAppUrl() ?? "/contacto";
  const phoneHref = getPhoneHref() ?? "/contacto";

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-dark-navy/45 backdrop-blur-[2px]"
        aria-label="Cerrar menú"
        onClick={onClose}
      />
      <div
        id="menu-movil"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-soft"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo variant="compact" />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-light-blue"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {primaryNav.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-xl px-3 py-3 font-heading text-sm font-semibold tracking-[0.06em] uppercase transition-colors ${
                      active
                        ? "bg-light-blue text-navy"
                        : "text-ink hover:bg-light"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="space-y-2 border-t border-line px-5 py-5">
          <Button href={getBookingUrl()} event="click_reservar" fullWidth>
            Reservar hora
          </Button>
          <Button href={whatsappHref} event="click_whatsapp" variant="outline" fullWidth>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>
          <Button href={phoneHref} event="click_llamar" variant="ghost" fullWidth>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar
          </Button>
          <p className="pt-1 text-center text-xs text-muted">{site.name}</p>
        </div>
      </div>
    </div>
  );
}
