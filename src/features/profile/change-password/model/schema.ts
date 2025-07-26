import z from 'zod';

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(8, { message: 'Old password must be at least 8 characters' }),
    newPassword: z.string().min(8, { message: 'New password must be at least 8 characters' }),
    confirmNewPassword: z
      .string()
      .min(8, { message: 'Confirm new password must be at least 8 characters' }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Password doesn't match",
    path: ['confirmNewPassword'],
  });
