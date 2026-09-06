"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/validations/contact";
import { rateLimit } from "@/lib/rate-limit";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company") ?? "");

  if (honeypot.length > 0) {
    return {
      status: "success",
      message: "Recibimos tu mensaje. El hospital te contactará cuando los datos de contacto estén activos.",
    };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for") ?? "local";

  if (!rateLimit(`contact:${ip}`)) {
    return {
      status: "error",
      message: "Hay demasiados envíos seguidos. Espera unos minutos e inténtalo otra vez.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    patientName: formData.get("patientName"),
    reason: formData.get("reason"),
    message: formData.get("message"),
    privacy: formData.get("privacy") === "on",
    company: honeypot,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return {
      status: "error",
      message: "Revisa los campos marcados para continuar.",
      fieldErrors,
    };
  }

  return {
    status: "success",
    message:
      "El formulario quedó validado. El envío real se activará cuando exista correo o un destino de recepción configurado.",
  };
}
