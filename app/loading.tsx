export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-navy/15 border-t-turquoise"
        aria-hidden="true"
      />
      <span className="sr-only">Cargando</span>
    </div>
  );
}
