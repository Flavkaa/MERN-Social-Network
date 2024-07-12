// router.patch("/:id/like", verifyToken, likePost);

import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createMutation } from '@farfetched/core';
import { createEvent, sample } from 'effector';

export interface ILike {
  postId: number;
  userId: string;
}

export const clickLike = createEvent<ILike>();

export const toLikeOrDislikePost = createMutation({
  handler: async ({ postId, userId }: ILike) => {
    const response = await api.patch<IPost>(`posts/${String(postId)}/like`, {
      userId,
    });
    return response.data;
  },
});

sample({
  source: clickLike,
  target: toLikeOrDislikePost.start,
});
