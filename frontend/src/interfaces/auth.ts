import { z } from 'zod'

const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  role: z.enum(['admin', 'user']),
  createdAt: z.date(),
  lastLogin: z.date(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(32, { message: 'Password must have a maximum of 32 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,32}$/,
      { message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &)" }),
});

export const registerSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  email: z
    .string()
    .email('Invalid email'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(32, { message: 'Password must have a maximum of 32 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,32}$/,
      { message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &)" }),
  confirmPassword: z
    .string()
    .min(8)
    .max(32)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,32}$/,
      { message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &)" }),
}).refine(
  data => data.password === data.confirmPassword,
  { message: 'Password don"t match' }
)

export type AuthLogin = z.infer<typeof loginSchema>;
export type AuthLoginErrors = z.inferFormattedError<typeof loginSchema>;

export type AuthRegister = z.infer<typeof registerSchema>;
export type AuthRegisterErrors = z.inferFormattedError<typeof registerSchema>;