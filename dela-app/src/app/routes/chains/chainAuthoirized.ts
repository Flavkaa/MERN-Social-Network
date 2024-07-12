import { userQuery } from '@src/entities/user/api/query';

import { chainRoute, redirect, RouteInstance, RouteParams, RouteParamsAndQuery } from 'atomic-router';
import { createEvent, sample } from 'effector';
import { not, or } from 'patronum';

import { $isAuth } from '../../model';
import { routes } from '../router';

export function chainAuthorized<Params extends RouteParams>(route: RouteInstance<Params>) {
  const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>();

  const isAuthorized = sample({
    clock: checkSessionStarted,
    filter: $isAuth,
  });

  const isNotAuthorized = sample({
    clock: checkSessionStarted,
    filter: not($isAuth),
  });

  redirect({
    clock: isNotAuthorized,
    route: routes.auth.auth,
  });

  sample({
    clock: checkSessionStarted,
    filter: not(userQuery.$succeeded),
    target: userQuery.start,
  });

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [isAuthorized],
    cancelOn: [isNotAuthorized],
  });
}
