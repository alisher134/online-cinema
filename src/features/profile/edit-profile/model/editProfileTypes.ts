import type z from 'zod';

import type { editProfileSchema } from './editProfileSchema';

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;
