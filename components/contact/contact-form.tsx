"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { contactSchema } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { site } from "@/config/site";

type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const initialState: ContactState = {
  status: "idle",
  message: "",
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "min-h-12 w-full rounded-xl border border-line bg-white px-4 text-ink outline-none focus:border-turquoise";

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initialState);
  const [pending, setPending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("company") ?? "");

    if (honeypot.length > 0) {
      setState({
        status: "success",
        message: "Recibimos tu mensaje. El hospital te contactará a la brevedad.",
      });
      return;
    }

    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      patientName: data.get("patientName"),
      reason: data.get("reason"),
      message: data.get("message"),
      privacy: data.get("privacy") === "on",
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

      setState({
        status: "error",
        message: "Revisa los campos marcados para continuar.",
        fieldErrors,
      });
      return;
    }

    setPending(true);
    track("submit_contacto");

    const subject = `Consulta HVB: ${parsed.data.reason}`;
    const body = [
      `Nombre: ${parsed.data.name} ${parsed.data.lastName}`,
      `Correo: ${parsed.data.email}`,
      `Teléfono: ${parsed.data.phone}`,
      parsed.data.patientName ? `Paciente: ${parsed.data.patientName}` : null,
      "",
      parsed.data.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setState({
      status: "success",
      message:
        "Se abrió tu correo para enviar el mensaje a contacto@hvb.cl. Si no se abre, escribe directo a ese correo.",
    });
    form.reset();
    setPending(false);
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nombre" error={state.fieldErrors?.name}>
          <input
            id="name"
            name="name"
            autoComplete="given-name"
            required
            className={inputClass}
            aria-invalid={Boolean(state.fieldErrors?.name)}
          />
        </Field>
        <Field id="lastName" label="Apellido" error={state.fieldErrors?.lastName}>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            required
            className={inputClass}
            aria-invalid={Boolean(state.fieldErrors?.lastName)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Correo" error={state.fieldErrors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </Field>
        <Field id="phone" label="Teléfono" error={state.fieldErrors?.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="patientName" label="Nombre del paciente" error={state.fieldErrors?.patientName}>
        <input id="patientName" name="patientName" className={inputClass} />
      </Field>

      <Field id="reason" label="Motivo" error={state.fieldErrors?.reason}>
        <input id="reason" name="reason" required className={inputClass} />
      </Field>

      <Field id="message" label="Mensaje" error={state.fieldErrors?.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} min-h-32 py-3`}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-muted">
          <input
            type="checkbox"
            name="privacy"
            className="mt-1 h-4 w-4 accent-turquoise-dark"
          />
          Acepto que mis datos se usen para responder esta consulta, según la
          política de privacidad del hospital.
        </label>
        {state.fieldErrors?.privacy ? (
          <p className="mt-2 text-sm text-danger">{state.fieldErrors.privacy}</p>
        ) : null}
      </div>

      {state.status !== "idle" ? (
        <p
          className={
            state.status === "success" ? "text-sm text-success" : "text-sm text-danger"
          }
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" disabled={pending}>
        {pending ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
