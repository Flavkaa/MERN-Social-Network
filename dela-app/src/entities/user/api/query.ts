import { api } from '@src/shared/api';
import { IUser } from '@src/shared/interfaces/entities/User.interface';

import { createQuery } from '@farfetched/core';

export const userQuery = createQuery({
  handler: async () => {
    const response = await api.get<IUser>('/user');

    return response.data;
  },
});
