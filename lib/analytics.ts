export type ConversionEvent =
  | "click_reservar"
  | "click_whatsapp"
  | "click_llamar"
  | "click_como_llegar"
  | "submit_contacto"
  | "view_urgencias"
  | "booking_start"
  | "booking_complete";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(
  event: ConversionEvent,
  payload?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}
