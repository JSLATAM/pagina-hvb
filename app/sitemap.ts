import type { MetadataRoute } from "next";
import { getEnabledServices } from "@/data/services";
import { getSiteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  if (!base) {
    return [];
  }

  const staticRoutes = [
    "",
    "/hospital",
    "/servicios",
    "/especialidades",
    "/equipo",
    "/urgencias",
    "/contacto",
    "/reservar",
    "/preguntas-frecuentes",
  ];

  const serviceRoutes = getEnabledServices().map(
    (service) => `/servicios/${service.slug}`,
  );

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
