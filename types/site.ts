export interface EmergencyBarConfig {
  enabled: boolean;
}

export interface SiteHours {
  label: string;
  value: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  heroText: string;
  keywords: string[];
  url: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  commune: string;
  city: string;
  country: string;
  hours: string;
  hoursDetail: SiteHours[];
  mapsUrl: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  emergency24h: boolean;
  emergencyBar: EmergencyBarConfig;
  bookingUrl: string;
  googleReviewsUrl: string;
  whatsappPrefill: string;
}
