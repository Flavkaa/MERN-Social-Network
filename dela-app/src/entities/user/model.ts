import { addOrRemoveFriend } from '@src/processes/add_friend/model';
import { api } from '@src/shared/api';
import { IUser } from '@src/shared/interfaces/entities/User.interface';

import { update } from '@farfetched/core';
import { createQuery } from '@farfetched/core';

export const userQuery = createQuery({
  handler: async () => {
    const response = await api.get<IUser>('/user');
    return response.data;
  },
});

update(userQuery, {
  on: addOrRemoveFriend,
  by: {
    //@ts-ignore
    success({ mutation, query }) {
      if (query && query !== null && 'result' in query) {
        const updatedFriends = query.result.friends.includes(mutation.result._id)
          ? query.result.friends.filter((id) => id !== mutation.result._id)
          : [...query.result.friends, mutation.result._id];
        query.result.friends = updatedFriends;
        return { result: [query.result, mutation.result] };
      }
      return { result: mutation.result };
    },
  },
});
