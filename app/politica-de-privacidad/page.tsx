import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDocument } from "@/data/legal";
import { getPageTitle } from "@/lib/seo";
import { LegalPage } from "@/components/layout/legal-page";

const document = getLegalDocument("politica-de-privacidad");

export const metadata: Metadata = {
  title: getPageTitle("Política de privacidad"),
  description: "Política de privacidad de Hospital Veterinario Bilbao. Documento en redacción.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  if (!document) {
    notFound();
  }

  return <LegalPage document={document} />;
}
