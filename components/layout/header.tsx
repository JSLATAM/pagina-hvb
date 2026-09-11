"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { primaryNav } from "@/config/navigation";
import { getBookingUrl } from "@/lib/booking";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-line/70 bg-white">
      <Container className="flex h-[var(--hvb-header-height)] items-center justify-between gap-4">
        <Logo variant="header" priority />

        <nav className="hidden min-w-0 lg:block" aria-label="Principal">
          <ul className="flex items-center gap-1 xl:gap-2">
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
                      "relative px-2.5 py-2 text-sm font-medium xl:px-3",
                      active ? "text-navy" : "text-muted hover:text-navy",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
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

        <div className="flex shrink-0 items-center gap-2">
          <Button
            href={getBookingUrl()}
            event="click_reservar"
            size="sm"
            className="hidden lg:inline-flex"
          >
            Reservar hora
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
