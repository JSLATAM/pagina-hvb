import { site } from "@/config/site";
import { isHttpUrl } from "@/lib/utils";

export interface BookingParams {
  service?: string;
  professional?: string;
}

export function getBookingUrl(params?: BookingParams): string {
  const base = site.bookingUrl || "/reservar";
  const search = new URLSearchParams();

  if (params?.service) {
    search.set("servicio", params.service);
  }

  if (params?.professional) {
    search.set("profesional", params.professional);
  }

  const query = search.toString();

  if (!query) {
    return base;
  }

  if (isHttpUrl(base)) {
    const url = new URL(base);
    search.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  }

  return `${base}?${query}`;
}
