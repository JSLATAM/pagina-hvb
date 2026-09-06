import type { SiteConfig } from "@/types/site";

export const site: SiteConfig = {
  name: "Hospital Veterinario Bilbao",
  shortName: "HVB",
  legalName: "Hospital Veterinario Bilbao",
  tagline: "Medicina Veterinaria integral para cuidar de ellos en cada etapa.",
  description:
    "Hospital veterinario y clínica veterinaria 24 horas en Providencia, Santiago. Urgencias veterinarias, hospitalización, cirugía y atención continua en Francisco Bilbao 2941.",
  heroText:
    "Atención veterinaria, diagnóstico, hospitalización, cirugía y especialidades, con funcionamiento continuo las 24 horas.",
  keywords: [
    "Hospital Veterinario Bilbao",
    "hospital veterinario 24 horas",
    "clínica veterinaria 24 horas",
    "clínica veterinaria Providencia",
    "hospital veterinario Providencia",
    "hospital veterinario Santiago",
    "urgencias veterinarias 24 horas",
    "urgencias veterinarias Providencia",
    "veterinaria 24 horas Santiago",
    "veterinaria Bilbao",
    "hospitalización veterinaria",
    "cirugía veterinaria",
    "Francisco Bilbao 2941",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "TODO_HVB_SITE_URL",
  phone: "+56 9 9000 2944",
  whatsapp: "+56 9 9000 2944",
  email: "contacto@hvb.cl",
  address: "Francisco Bilbao 2941, Providencia",
  commune: "Providencia",
  city: "Santiago",
  country: "Chile",
  hours: "Atención continua 24 horas",
  hoursDetail: [{ label: "Todos los días", value: "24 horas" }],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Francisco%20Bilbao%202941%2C%20Providencia%2C%20Santiago",
  instagram: "",
  facebook: "",
  tiktok: "",
  emergency24h: true,
  emergencyBar: {
    enabled: true,
  },
  bookingUrl: "/reservar",
  googleReviewsUrl: "",
  whatsappPrefill:
    "Hola, quisiera información sobre atención en Hospital Veterinario Bilbao.",
};

export const brand = {
  logo: "/brand/hvb-logo.jpg",
  logoAlt: "Hospital Veterinario Bilbao",
} as const;
