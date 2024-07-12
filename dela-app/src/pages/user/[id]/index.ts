import { routes } from '@app/routes/router';

import { routeUserPage } from './model/model';
import { User } from './page';
import { chainAuthorized } from '@src/app/routes/chains/chainAuthoirized';

export const currentRoute = routes.private.user;

export const UserRoute = {
  view: User,
  route: chainAuthorized(routes.private.user),
};
