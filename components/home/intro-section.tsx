import { site } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function IntroSection() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          title="Hospital Veterinario en Providencia"
          description={`${site.name} entrega Medicina Veterinaria en Francisco Bilbao 2941. El trabajo se organiza en torno al diagnóstico, el cuidado del paciente y un trato claro con el tutor.`}
        />
      </Container>
    </section>
  );
}
