import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDocument } from "@/data/legal";
import { getPageTitle } from "@/lib/seo";
import { LegalPage } from "@/components/layout/legal-page";

const document = getLegalDocument("cookies");

export const metadata: Metadata = {
  title: getPageTitle("Cookies"),
  description: "Política de cookies de Hospital Veterinario Bilbao. Documento en redacción.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  if (!document) {
    notFound();
  }

  return <LegalPage document={document} />;
}
