import { z } from "zod"

export const SignUpSchema = z.object({
  name: z.string(),
  email: z.string()
    .min(8, { message: 'Debe contener al menos 8 caracteres' })
    .max(50, { message: 'Debe contener maximo 50 caracteres' })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,'Ingrese un correo valido'),
  password: z.string()
    .min(8, { message: 'Debe contener al menos 8 caracteres' })
    .max(16, { message: 'Debe contener maximo 16 caracteres' })
    .regex(/\d/,'Debe contener al menos un número')
    .regex(/[A-Z]/,'Debe contener al menos un letra en mayúscula')
    .regex(/[a-z]/,'Debe contener al menos un letra en minúscula')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un símbolo especial'),
})