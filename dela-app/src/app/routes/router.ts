import { createHistoryRouter, createRoute } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';

import { initializeApp } from '../model';

export const routes = {
  home: createRoute(),
  auth: {
    auth: createRoute(),
    registration: createRoute(),
  },
  private: {
    feed: createRoute(),
    user: createRoute<{ userId: string }>(),
  },
};

export const mappedRoutes = [
  {
    route: routes.home,
    path: '/',
  },
  {
    route: routes.auth.auth,
    path: '/auth',
  },
  {
    route: routes.auth.registration,
    path: '/registration',
  },
  {
    route: routes.private.feed,
    path: '/feed',
  },
  {
    route: routes.private.user,
    path: '/user/:userId',
  },
];

export const router = createHistoryRouter({ routes: mappedRoutes });

sample({
  clock: initializeApp,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
