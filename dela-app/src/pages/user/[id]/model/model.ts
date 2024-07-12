import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createQuery } from '@farfetched/core';

export const userFeed = createQuery({
  handler: async (userId: string) => {
    const response = await api.get<IPost[]>(`posts/${userId}/posts`);

    return response.data;
  },
});

export const userByIdQuery = createQuery({
  handler: async (userId: string) => {
    const response = await api.get<IPost[]>(`users/${userId}`);

    return response.data;
  },
});

// const getAllInfoById = sample({
//   source: routes.private.user.opened,
//   fn: (params) => params.params.userId,
//   target: [userFeed.start, userByIdQuery.start],
// });

// export const routeUserPage = chainRoute({
//   route: chainAuthorized(routes.private.user),
//   beforeOpen: getAllInfoById,
// });
