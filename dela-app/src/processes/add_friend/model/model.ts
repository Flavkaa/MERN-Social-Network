import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createMutation } from '@farfetched/core';
import { createEvent, sample } from 'effector';

interface IFriendEvent {
  idToAddOrRemove: number | string;
  userId: string | number;
}

// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export const addOrRemoveFriend = createMutation({
  handler: async ({ userId, idToAddOrRemove }: IFriendEvent) => {
    const response = await api.patch<{ firstName: string; lastName: string; _id: string }>(
      `users/${userId}/${idToAddOrRemove}`,
    );
    return response.data;
  },
});

const clickFriend = createEvent<IFriendEvent>();

sample({
  clock: clickFriend,
  target: addOrRemoveFriend.start,
});

export { clickFriend };
