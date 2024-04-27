import { api } from '@src/shared/api';
import { IUser } from '@src/shared/interfaces/entities/User.interface';

import { createMutation } from '@farfetched/core';

export const auth = createMutation({
  handler: async ({ email, password }: { email: string; password: string }) => {
    const response = api.post<{ token: string; user: IUser }>('/auth/login', {
      email,
      password,
    });

    return response;
  },
});
