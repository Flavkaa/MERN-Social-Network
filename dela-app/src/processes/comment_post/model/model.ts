import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createMutation } from '@farfetched/core';
import { createEvent, sample } from 'effector';

interface IComment {
  id: number;
  comment: string;
}

export const commentPost = createMutation({
  handler: async ({ id, comment }: IComment) => {
    const response = await api.patch<IPost>(`posts/${id}/comment`, {
      text: comment,
    });
    return response.data;
  },
});

const sendComment = createEvent<IComment>();

sample({
  clock: sendComment,
  target: commentPost.start,
});

export { sendComment };
