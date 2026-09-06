"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { primaryNav } from "@/config/navigation";
import { getBookingUrl } from "@/lib/booking";
import { getPhoneHref, getWhatsAppUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const whatsappHref = getWhatsAppUrl() ?? "/contacto";
  const phoneHref = getPhoneHref() ?? "/contacto";

  return (
    <header className="border-b border-line/80 bg-white">
      <Container className="flex h-[var(--hvb-header-height)] items-center justify-between gap-4">
        <Logo variant="header" priority />

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-2 py-2 font-heading text-[0.68rem] font-semibold tracking-[0.08em] uppercase xl:px-2.5 xl:text-[0.72rem]",
                      active ? "text-navy" : "text-muted hover:text-navy",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px rounded-full",
                        active ? "bg-turquoise" : "bg-transparent",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={phoneHref}
            event="click_llamar"
            variant="ghost"
            size="sm"
            className="hidden h-11 w-11 px-0 md:inline-flex xl:hidden"
            aria-label="Llamar"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            href={whatsappHref}
            event="click_whatsapp"
            variant="outline"
            size="sm"
            className="hidden xl:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>
          <Button
            href={getBookingUrl()}
            event="click_reservar"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Reservar hora
          </Button>
          <Button
            href={getBookingUrl()}
            event="click_reservar"
            size="sm"
            className="inline-flex px-4 sm:hidden"
          >
            Reservar
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-light-blue lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
