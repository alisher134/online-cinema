import { selectIsAuth } from '@/entities/auth';

import { useAppSelector } from '@/shared/hooks';

export const useAuth = () => useAppSelector(selectIsAuth);
