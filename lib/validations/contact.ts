import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre.").max(80),
  lastName: z.string().trim().min(2, "Ingresa tu apellido.").max(80),
  email: z.string().trim().email("Ingresa un correo válido."),
  phone: z.string().trim().min(8, "Ingresa un teléfono de contacto.").max(20),
  patientName: z.string().trim().max(80).optional().or(z.literal("")),
  reason: z.string().trim().min(3, "Indica el motivo.").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más para poder orientarte.")
    .max(2000),
  privacy: z.literal(true, {
    error: "Debes aceptar el tratamiento de datos para enviar el mensaje.",
  }),
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
