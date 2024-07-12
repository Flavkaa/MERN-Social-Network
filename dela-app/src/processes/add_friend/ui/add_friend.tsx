/* eslint-disable max-len */
import { userQuery } from '@src/entities/user/api/query';

import { IconFriends, IconFriendsOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';

import { clickFriend } from '../model/model';

type Props = {
  inFriends: boolean;
  id: string;
};

export const AddFriend = ({ inFriends, id }: Props) => {
  const [click] = useUnit([clickFriend]);
  const { data: user } = useUnit(userQuery);

  return inFriends ? (
    <IconFriends onClick={() => click({ userId: user?._id as string, idToAddOrRemove: id })} />
  ) : (
    <IconFriendsOff onClick={() => click({ userId: user?._id as string, idToAddOrRemove: id })} />
  );
};
