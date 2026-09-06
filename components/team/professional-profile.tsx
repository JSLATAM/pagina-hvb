import Image from "next/image";
import { getBookingUrl } from "@/lib/booking";
import type { Professional } from "@/types/content";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface ProfessionalProfileProps {
  professional: Professional;
}

export function ProfessionalProfile({
  professional,
}: ProfessionalProfileProps) {
  return (
    <>
      <PageIntro
        eyebrow={professional.role}
        title={professional.name}
        description={professional.description}
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { href: "/equipo", label: "Equipo" },
          { label: professional.name },
        ]}
        actions={
          <Button
            href={getBookingUrl({ professional: professional.slug })}
            event="click_reservar"
          >
            Reservar hora
          </Button>
        }
      />
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[16rem_1fr]">
        <div className="overflow-hidden rounded-2xl bg-light-blue">
          {professional.photo ? (
            <Image
              src={professional.photo}
              alt={`Retrato de ${professional.name}`}
              width={320}
              height={400}
              className="h-auto w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center text-sm text-muted">
              Fotografía pendiente
            </div>
          )}
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Especialidad
            </h2>
            <p className="mt-2 text-muted">{professional.specialty}</p>
          </section>
          {professional.education.length > 0 ? (
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                Formación
              </h2>
              <ul className="mt-2 space-y-2 text-muted">
                {professional.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {professional.interests.length > 0 ? (
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                Áreas de interés
              </h2>
              <ul className="mt-2 space-y-2 text-muted">
                {professional.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </Container>
    </>
  );
}
