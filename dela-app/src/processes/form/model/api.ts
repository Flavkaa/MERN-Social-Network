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

export const register = createMutation({
  handler: async ({
    firstName,
    lastName,
    email,
    password,
    friends,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    friends: any[];
  }) => {
    const response = api.post<{ token: string; user: IUser }>('/register', {
      firstName,
      lastName,
      email,
      password,
      friends,
    });

    return response;
  },
});
