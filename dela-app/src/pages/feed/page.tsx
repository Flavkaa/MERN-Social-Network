import React from 'react';

import { User } from '@src/entities/user';
import { CreatePost } from '@src/processes/create_post';
import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { FeedLayout } from '@src/shared/layouts/feed_layout';
import { Flex } from '@src/shared/ui/flex';
import { FeedList } from '@src/widgets/feed/ui/feed_list';

import { createRoute } from 'atomic-router';

export const feedRoute = createRoute();

export const Feed = () => {
  return (
    <FeedLayout>
      <User />
      <Flex direction={Direction.Column}>
        <CreatePost />
        <FeedList />
      </Flex>
    </FeedLayout>
  );
};
