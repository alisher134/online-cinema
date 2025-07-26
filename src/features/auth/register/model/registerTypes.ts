import z from 'zod';

import type { registerSchema } from './registerSchema';

export type RegisterFormFields = z.infer<typeof registerSchema>;
