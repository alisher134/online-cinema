import type z from 'zod';

import type { changePasswordSchema } from './changePasswordSchema';

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
