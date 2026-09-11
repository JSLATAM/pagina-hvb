import { site } from "@/config/site";
import { getMailtoHref, getPhoneHref } from "@/lib/contact";
import { Container } from "@/components/ui/container";

export function EmergencyBar() {
  if (!site.emergencyBar.enabled) {
    return null;
  }

  const phoneHref = getPhoneHref();
  const mailHref = getMailtoHref();

  return (
    <div className="bg-dark-navy text-white">
      <Container className="flex min-h-[var(--hvb-emergency-bar-height)] items-center justify-between gap-3 py-1.5 text-xs sm:text-sm">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          {mailHref ? (
            <a
              href={mailHref}
              className="hidden truncate text-white/75 transition-colors hover:text-turquoise sm:inline"
            >
              {site.email}
            </a>
          ) : null}
          {phoneHref ? (
            <a
              href={phoneHref}
              className="truncate text-white/90 transition-colors hover:text-turquoise"
            >
              {site.phone}
            </a>
          ) : (
            <span className="truncate text-white/90">{site.phone}</span>
          )}
        </div>
        <p className="flex shrink-0 items-center gap-2 font-heading text-white">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-turquoise"
          />
          <span className="sm:hidden">Providencia</span>
          <span className="hidden sm:inline">Hospital veterinario en Providencia</span>
        </p>
      </Container>
    </div>
  );
}
