import { isConfigured } from "@/lib/utils";

export const analytics = {
  ga4: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gtm: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
};

export function hasAnalytics(): boolean {
  return (
    isConfigured(analytics.ga4) ||
    isConfigured(analytics.gtm) ||
    isConfigured(analytics.metaPixel) ||
    isConfigured(analytics.googleAds)
  );
}
