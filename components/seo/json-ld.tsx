import { getVeterinarySchema } from "@/lib/schema";

export function JsonLd() {
  const schema = getVeterinarySchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
