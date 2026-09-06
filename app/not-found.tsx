import { getBookingUrl } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-16">
      <p className="font-heading text-xs font-semibold tracking-[0.2em] text-steel uppercase">
        Error 404
      </p>
      <h1 className="mt-4 max-w-xl font-heading text-4xl font-semibold text-navy">
        Parece que esta página salió a dar una vuelta.
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        El enlace no existe o fue movido. Puedes volver al inicio o reservar una
        hora desde aquí.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" variant="secondary">
          Volver al inicio
        </Button>
        <Button href={getBookingUrl()} event="click_reservar">
          Reservar hora
        </Button>
      </div>
    </Container>
  );
}
