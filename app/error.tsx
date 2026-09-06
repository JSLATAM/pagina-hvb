"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ErrorState({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[50vh] flex-col items-start justify-center py-16">
      <p className="font-heading text-xs font-semibold tracking-[0.2em] text-steel uppercase">
        Error
      </p>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-navy">
        No pudimos cargar esta página.
      </h1>
      <p className="mt-3 max-w-lg text-muted">
        Inténtalo otra vez. Si el problema continúa, usa el teléfono o WhatsApp
        cuando esos datos estén confirmados.
      </p>
      <div className="mt-8">
        <Button onClick={reset} variant="secondary">
          Reintentar
        </Button>
      </div>
    </Container>
  );
}
