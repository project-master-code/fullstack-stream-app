import { z } from 'zod';

export const LoginUserDto = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginUserDto = z.infer<typeof LoginUserDto>;

export const CreateUserDto = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const ForgetPasswordDTO = z.object({
  email: z.string().email(),
});
export type ForgetPasswordDTO = z.infer<typeof ForgetPasswordDTO>;

export const ResetPasswordDTO = z.object({
  password: z.string().min(6),
});
export type ResetPasswordDTO = z.infer<typeof ResetPasswordDTO>;
