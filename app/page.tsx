import type { Metadata } from "next";
import { site } from "@/config/site";
import { getDefaultTitle } from "@/lib/seo";
import { CareColumns } from "@/components/home/care-columns";
import { CtaBanner } from "@/components/home/cta-banner";
import { HeroFoundation } from "@/components/home/hero-foundation";
import { HospitalMethod } from "@/components/home/hospital-method";
import { IntroSection } from "@/components/home/intro-section";
import { PatientTutor } from "@/components/home/patient-tutor";
import { ServiceShowcase } from "@/components/home/service-showcase";
import { SpecialtiesPreview } from "@/components/home/specialties-preview";
import { TeamPreview } from "@/components/home/team-preview";

export const metadata: Metadata = {
  title: {
    absolute: getDefaultTitle(),
  },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <HeroFoundation />
      <IntroSection />
      <CareColumns />
      <ServiceShowcase />
      <SpecialtiesPreview />
      <PatientTutor />
      <TeamPreview />
      <HospitalMethod />
      <CtaBanner />
    </>
  );
}
