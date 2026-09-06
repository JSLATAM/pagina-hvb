import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/config/site";
import { brand } from "@/config/site";
import { getDefaultTitle, getMetadataBase } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteChrome } from "@/components/layout/site-chrome";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
  adjustFontFallback: true,
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "optional",
  adjustFontFallback: true,
});

const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: getDefaultTitle(),
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  icons: {
    icon: brand.logo,
    apple: brand.logo,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: site.name,
    title: getDefaultTitle(),
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: getDefaultTitle(),
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <JsonLd />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
