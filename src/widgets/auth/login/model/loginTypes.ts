import type z from 'zod';

import type { loginSchema } from './loginSchema';

export type LoginFormFields = z.infer<typeof loginSchema>;
