import { Form } from '@src/processes/form';
import { AuthLayout } from '@src/shared/layouts/auth_layout';

import { createRoute } from 'atomic-router';
export const authRoute = createRoute();

export const Auth = () => {
  return (
    <AuthLayout>
      <Form />
    </AuthLayout>
  );
};
