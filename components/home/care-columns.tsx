import { Check } from "lucide-react";
import { site } from "@/config/site";
import { getEnabledServices } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SectionHeading } from "@/components/ui/section-heading";

export function CareColumns() {
  const services = getEnabledServices();

  return (
    <section className="bg-light">
      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div>
          <SectionHeading
            title="El hospital en Providencia"
            description={`Atendemos en ${site.address}. Publicamos solo lo que está confirmado: no ofrecemos urgencias ni atención 24 horas por ahora.`}
          />
          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(86_225_210_/_0.16)_0%,transparent_58%)]"
            />
            <div className="relative flex flex-col items-center">
              <Logo variant="hero" href={null} />
              <p className="mt-4 font-heading text-sm font-semibold text-turquoise">
                Francisco Bilbao 2941
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/55">
                Fotografía clínica de recepción, pendiente.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="/hospital" variant="secondary">
              Conocer el hospital
            </Button>
          </div>
        </div>

        <div>
          <SectionHeading
            title="Servicios de Medicina Veterinaria"
            description="Consulta, hospitalización, cirugía, medicina preventiva, laboratorio e imagenología. El resto se publica cuando el hospital lo valida."
          />
          <ul className="mt-10 space-y-3.5">
            {services.map((service) => (
              <li key={service.slug} className="flex items-center gap-3 text-base text-navy">
                <Check
                  className="h-4 w-4 shrink-0 text-turquoise-dark"
                  aria-hidden="true"
                />
                {service.name}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/servicios">Ver servicios</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
