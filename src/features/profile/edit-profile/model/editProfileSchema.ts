import z from 'zod';

export const editProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  aboutMe: z.string().optional(),
  age: z.number().optional(),
  gender: z.string().optional(),
  country: z.string().optional(),
  avatarPath: z.string().optional(),
});
