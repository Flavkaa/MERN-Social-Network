import { addOrRemoveFriend } from '@src/processes/add_friend/model/model';

import { update } from '@farfetched/core';

import { userQuery } from '../api/query';

update(userQuery, {
  on: addOrRemoveFriend,
  by: {
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
