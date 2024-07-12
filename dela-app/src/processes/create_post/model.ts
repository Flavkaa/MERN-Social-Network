import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createMutation } from '@farfetched/core';
import { createEvent, sample } from 'effector';

type PostMutationType = {
  userId: string;
  description: string;
};

export const createPost = createMutation({
  handler: async (post: PostMutationType) => {
    const response = await api.post<IPost>('posts', post);
    return response.data;
  },
});

const sendPost = createEvent<PostMutationType>();

sample({
  clock: sendPost,
  target: createPost.start,
});

export { sendPost };
