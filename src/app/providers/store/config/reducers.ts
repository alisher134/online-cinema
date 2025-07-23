import { authReducer } from '@/entities/auth';
import { profileReducer } from '@/entities/profile';

export const reducers = {
  auth: authReducer,
  profile: profileReducer,
};
