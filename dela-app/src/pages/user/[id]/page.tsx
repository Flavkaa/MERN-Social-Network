import React from 'react';

import { FeedLayout } from '@src/shared/layouts/feed_layout';
import { FeedList } from '@src/widgets/feed/ui/feed_list';

export const User = () => {
  return (
    <FeedLayout>
      <User />
      <FeedList type="user" />
    </FeedLayout>
  );
};
