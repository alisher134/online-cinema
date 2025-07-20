import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { loginSchema } from '@/widgets/auth/login/model/loginSchema';

import { LoginForm } from '@/features/auth/login';
import { AuthSwitch } from '@/features/auth/ui';

import { ROUTES } from '@/shared/config/routes';

export const LoginFormProvider = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });
  return (
    <FormProvider {...methods}>
      <LoginForm />
      <AuthSwitch text="Don't have an account?" link={ROUTES.auth.register.page} label="Register" />
    </FormProvider>
  );
};
