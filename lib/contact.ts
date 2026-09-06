import { site } from "@/config/site";
import { digitsOnly, isConfigured, isHttpUrl } from "@/lib/utils";

export function isSamePhoneAndWhatsApp(): boolean {
  return (
    isConfigured(site.phone) &&
    isConfigured(site.whatsapp) &&
    digitsOnly(site.phone) === digitsOnly(site.whatsapp)
  );
}

export function getPhoneLabel(): string {
  return isSamePhoneAndWhatsApp() ? "Teléfono y WhatsApp" : "Teléfono";
}

export function getWhatsAppUrl(message = site.whatsappPrefill): string | null {
  if (!isConfigured(site.whatsapp)) {
    return null;
  }

  const phone = digitsOnly(site.whatsapp);

  if (phone.length < 8) {
    return null;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getPhoneHref(): string | null {
  if (!isConfigured(site.phone)) {
    return null;
  }

  return `tel:${digitsOnly(site.phone)}`;
}

export function getMailtoHref(): string | null {
  if (!isConfigured(site.email) || !site.email.includes("@")) {
    return null;
  }

  return `mailto:${site.email}`;
}

export function getDirectionsUrl(): string | null {
  if (isHttpUrl(site.mapsUrl)) {
    return site.mapsUrl;
  }

  if (isConfigured(site.address)) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
  }

  return null;
}

export function getSocialLinks(): Array<{
  label: string;
  href: string;
}> {
  return [
    { label: "Instagram", href: site.instagram },
    { label: "Facebook", href: site.facebook },
    { label: "TikTok", href: site.tiktok },
  ].filter((item) => isHttpUrl(item.href));
}
