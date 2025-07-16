import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { RegisterForm } from '@/features/auth/register';
import { AuthSwitch } from '@/features/auth/ui';

import { ROUTES } from '@/shared/config/routes';

import { registerSchema } from '../../model/registerSchema';

export const RegisterCreateForm = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  return (
    <FormProvider {...methods}>
      <RegisterForm />
      <AuthSwitch text="Already have an account?" link={ROUTES.auth.login.page} label="Login" />
    </FormProvider>
  );
};
