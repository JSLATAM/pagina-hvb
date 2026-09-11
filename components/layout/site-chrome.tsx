import type { ReactNode } from "react";
import { EmergencyBar } from "@/components/layout/emergency-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

interface SiteChromeProps {
  children: ReactNode;
}

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <SkipLink />
      <EmergencyBar />
      <div className="sticky top-0 z-50 min-w-0 border-b-0 bg-white">
        <Header />
      </div>
      <main id="contenido" className="min-w-0 flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
