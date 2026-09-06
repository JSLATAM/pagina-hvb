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
      <div className="sticky top-0 z-50 bg-white">
        <EmergencyBar />
        <Header />
      </div>
      <main
        id="contenido"
        className="flex-1 pb-[calc(var(--hvb-action-bar-height)+0.5rem)] lg:pb-0"
      >
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
