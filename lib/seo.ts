import { site } from "@/config/site";
import { getSiteUrl } from "@/lib/utils";

export function getMetadataBase(): URL | undefined {
  const url = getSiteUrl();
  return url ? new URL(url) : undefined;
}

export function getDefaultTitle(): string {
  return `${site.name} | Clínica Veterinaria en Providencia`;
}

export function getPageTitle(title: string): string {
  return title;
}

export function absoluteUrl(path: string): string | undefined {
  const base = getSiteUrl();

  if (!base) {
    return undefined;
  }

  return new URL(path, base).toString();
}
