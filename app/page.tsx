import type { Metadata } from "next";
import { site } from "@/config/site";
import { getDefaultTitle } from "@/lib/seo";
import { HeroFoundation } from "@/components/home/hero-foundation";
import { Container } from "@/components/ui/container";

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
      <section className="border-t border-line bg-light">
        <Container className="py-14 sm:py-16">
          <p className="font-heading text-xs font-semibold tracking-[0.2em] text-steel uppercase">
            Clínica veterinaria 24 horas
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Hospital veterinario de atención continua en Providencia.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
            En Francisco Bilbao 2941 recibimos urgencias veterinarias y
            consultas de Medicina Veterinaria todos los días, las 24 horas.
            {` ${site.name} `}
            combina hospitalización, cirugía y diagnóstico con un trato cercano
            para cada familia.
          </p>
        </Container>
      </section>
    </>
  );
}
