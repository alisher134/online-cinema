import toast from 'react-hot-toast';

import { authApi } from '@/entities/auth/api/authApi';
import { profileApi } from '@/entities/profile';

import { router } from '../../router';

export const extraArgument = {
  router,
  toast,
  api: {
    auth: authApi,
    profile: profileApi,
  },
};
