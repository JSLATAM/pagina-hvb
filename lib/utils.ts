import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isConfigured(value: string | undefined | null): boolean {
  if (!value) {
    return false;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 && !trimmed.startsWith("TODO_");
}

export function isHttpUrl(value: string | undefined | null): boolean {
  if (!isConfigured(value)) {
    return false;
  }

  try {
    const url = new URL(value as string);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function getSiteUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  return isHttpUrl(value) ? value : undefined;
}
