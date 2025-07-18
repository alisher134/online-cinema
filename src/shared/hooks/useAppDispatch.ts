import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/app/providers/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
