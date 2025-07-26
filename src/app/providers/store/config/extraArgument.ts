import toast from 'react-hot-toast';

import { authService } from '@/entities/auth/api/service';
import { profileApi } from '@/entities/profile';

import { router } from '../../router';

export const extraArgument = {
  router,
  toast,
  api: {
    auth: authService,
    profile: profileApi,
  },
};
