import { createRoutesView } from 'atomic-router-react';

import { AuthRoute } from './auth';
import { FeedRoute } from './feed';
import { HomeRoute } from './home';
import { UserRoute } from './user/[id]';

export const Pages = createRoutesView({
  routes: [AuthRoute, FeedRoute, HomeRoute, UserRoute],
  otherwise: HomeRoute.view,
});
