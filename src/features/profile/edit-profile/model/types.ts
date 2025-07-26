import type z from 'zod';

import type { editProfileSchema } from './schema';

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;
