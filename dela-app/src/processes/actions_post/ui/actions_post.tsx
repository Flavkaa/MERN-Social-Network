import { Align, Justify } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Container } from '@src/shared/ui/container';
import { Borders } from '@src/shared/ui/container/container';
import { Flex } from '@src/shared/ui/flex';
import { Paragraph } from '@src/shared/ui/paragraph/paragraph';

import { IconHeart, IconHeartFilled, IconHearts } from '@tabler/icons-react';
import classNames from 'classnames';
import { useUnit } from 'effector-react';

import { clickLike, ILike } from '../model';
import cs from './actions_post.module.scss';
import { AddFriend } from '@src/processes/add_friend';

export const ActionsPost = ({
  isLiked,
  data,
  amount,
  userId,
  inFriends,
}: {
  inFriends: boolean;
  userId: string;
  isLiked: boolean;
  data: ILike;
  amount: number;
}) => {
  const [click] = useUnit([clickLike]);

  return (
    <Container borders={Borders.NoRadius}>
      <Flex align={Align.Center}>
        {userId && <AddFriend id={userId} inFriends={inFriends} />}
        {isLiked ? (
          <IconHeartFilled
            className={isLiked ? classNames(cs.like_button, cs.liked) : undefined}
            onClick={() => click(data)}
          />
        ) : (
          <IconHeart
            className={isLiked ? undefined : classNames(cs.like_button, cs.unliked)}
            onClick={() => click(data)}
          />
        )}
        {amount > 0 && (
          <Flex>
            <Paragraph>{amount}</Paragraph>
            <IconHearts />
          </Flex>
        )}
      </Flex>
    </Container>
  );
};
