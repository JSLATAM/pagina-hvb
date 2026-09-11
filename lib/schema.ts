import { brand, site } from "@/config/site";
import { getEnabledServices } from "@/data/services";
import { digitsOnly, getSiteUrl, isConfigured } from "@/lib/utils";

export function getVeterinarySchema(): Record<string, unknown> {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": ["VeterinaryCare", "LocalBusiness"],
    name: site.name,
    alternateName: [site.shortName, "Clínica Veterinaria Bilbao"],
    description: site.description,
    url,
    image: url ? new URL(brand.logo, url).toString() : undefined,
    telephone: isConfigured(site.phone)
      ? `+${digitsOnly(site.phone)}`
      : undefined,
    email: isConfigured(site.email) ? site.email : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Francisco Bilbao 2941",
      addressLocality: site.commune,
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    availableLanguage: "es",
    areaServed: [
      { "@type": "City", name: "Providencia" },
      { "@type": "City", name: "Santiago" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Medicina Veterinaria",
      itemListElement: getEnabledServices().map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
  };
}
