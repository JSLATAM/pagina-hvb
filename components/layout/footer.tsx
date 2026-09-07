import type { ReactNode } from "react";
import Link from "next/link";
import { footerHospitalNav, footerLegalNav, footerPatientsNav } from "@/config/navigation";
import { site } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import {
  getDirectionsUrl,
  getMailtoHref,
  getPhoneHref,
  getPhoneLabel,
  getSocialLinks,
} from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

function FooterList({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-heading text-xs font-semibold tracking-[0.18em] text-turquoise uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getUTCFullYear();
  const social = getSocialLinks();
  const phoneHref = getPhoneHref();
  const mailHref = getMailtoHref();
  const directionsHref = getDirectionsUrl();

  return (
    <footer className="bg-dark-navy pb-[calc(var(--hvb-action-bar-height)+env(safe-area-inset-bottom))] text-white lg:pb-0">
      <div className="h-px bg-linear-to-r from-transparent via-turquoise/70 to-transparent" />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm">
            <Logo variant="footer" />
            <p className="mt-5 text-sm leading-7 text-white/70">
              Hospital veterinario y clínica veterinaria 24 horas en
              Providencia, con Medicina Veterinaria de urgencias y atención
              continua.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href={getBookingUrl()} event="click_reservar" size="sm">
                Reservar hora
              </Button>
              <Button href="/urgencias" variant="inverse" size="sm">
                Urgencias
              </Button>
            </div>
          </div>

          <FooterList title="Hospital">
            {footerHospitalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-turquoise"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterList>

          <FooterList title="Pacientes">
            {footerPatientsNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-turquoise"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterList>

          <FooterList title="Contacto">
            <li className="text-sm leading-6 text-white/75">
              <span className="block text-white/45">Dirección</span>
              {directionsHref ? (
                <a href={directionsHref} className="hover:text-turquoise">
                  {site.address}
                </a>
              ) : (
                site.address
              )}
            </li>
            <li className="text-sm leading-6 text-white/75">
              <span className="block text-white/45">{getPhoneLabel()}</span>
              {phoneHref ? (
                <a href={phoneHref} className="hover:text-turquoise">
                  {site.phone}
                </a>
              ) : (
                site.phone
              )}
            </li>
            <li className="text-sm leading-6 text-white/75">
              <span className="block text-white/45">Correo</span>
              {mailHref ? (
                <a href={mailHref} className="hover:text-turquoise">
                  {site.email}
                </a>
              ) : (
                site.email
              )}
            </li>
            <li className="text-sm leading-6 text-white/75">
              <span className="block text-white/45">Horario</span>
              {site.hours}
            </li>
          </FooterList>
        </div>

        {social.length > 0 ? (
          <ul className="mt-12 flex gap-4 text-sm text-white/70">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-turquoise"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}.
          </p>
          <ul className="flex flex-wrap gap-4">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-turquoise">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
