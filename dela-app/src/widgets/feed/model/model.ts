import { routes } from '@src/app/routes';
import { toLikeOrDislikePost } from '@src/processes/actions_post';
import { commentPost } from '@src/processes/comment_post/model/model';
import { createPost } from '@src/processes/create_post/model/model';
import { api } from '@src/shared/api';
import { replaceItem } from '@src/shared/helpers/replaceArrayItem';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { cache, createQuery, update } from '@farfetched/core';
import { combine, createEffect, createEvent, createStore, sample } from 'effector';
import { debounce } from 'patronum';

// const $page = createStore(0);
// const $search = createStore('');

// export const $filters = combine($page, $search, (page, search) => {
//   return {
//     page,
//     search,
//   };
// });

export const feedQuery = createQuery({
  handler: async () => {
    const response = await api.get<IPost[]>('/posts/feed');
    return response.data;
  },
});

const updateSinglePost = createEvent<IPost>();

const getFeedFx = createEffect(feedQuery.start);

// debounce({
//   source: $filters,
//   target: feedQuery.start,
//   timeout: 300,
// });

cache(feedQuery);

update(feedQuery, {
  on: commentPost,
  by: {
    //@ts-ignore
    success({ mutation, query }) {
      if (query && query !== null && 'result' in query) {
        const updatedArray = replaceItem(query.result, '_id', mutation.result._id, mutation.result);
        return { result: updatedArray };
      }
    },
  },
});

update(feedQuery, {
  on: toLikeOrDislikePost,
  by: {
    //@ts-ignore
    success({ mutation, query }) {
      if (query && query !== null && 'result' in query) {
        const updatedArray = replaceItem(query.result, '_id', mutation.result._id, mutation.result);
        return { result: updatedArray };
      }
    },
  },
});

update(feedQuery, {
  on: createPost,
  by: {
    //@ts-ignore
    success({ mutation, query }) {
      if (query && query !== null && 'result' in query) {
        return { result: [mutation.result, ...query.result] };
      }
    },
  },
});

sample({
  clock: routes.private.feed.opened,
  target: getFeedFx,
});

export { updateSinglePost };
