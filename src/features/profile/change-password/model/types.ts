import type z from 'zod';

import type { changePasswordSchema } from './schema';

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
