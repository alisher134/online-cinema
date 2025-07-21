import z from 'zod';

export const editProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional().nullable(),
  aboutMe: z.string().optional().nullable(),
  age: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  avatarPath: z.string().optional().nullable(),
});
