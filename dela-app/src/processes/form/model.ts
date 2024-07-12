/* eslint-disable @typescript-eslint/no-unused-vars */

import { tokenRecieved } from '@src/app/model';
import { routes } from '@src/app/routes';
import { api } from '@src/shared/api';
import { IUser } from '@src/shared/interfaces/entities/User.interface';

import { createMutation } from '@farfetched/core';
import { redirect } from 'atomic-router';
import { createEvent, createStore, sample } from 'effector';
import { or } from 'patronum';

export const auth = createMutation({
  handler: async ({ email, password }: { email: string; password: string }) => {
    const response = api.post<{ token: string; user: IUser }>('/auth/login', {
      email,
      password,
    });

    return response;
  },
});

export const register = createMutation({
  handler: async ({
    firstName,
    lastName,
    email,
    password,
    friends,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    friends: any[];
  }) => {
    const response = api.post<{ token: string; user: IUser }>('/register', {
      firstName,
      lastName,
      email,
      password,
      friends,
    });

    return response;
  },
});

const $email = createStore<string>('');
const $password = createStore<string>('');

const $firstName = createStore<string>('');
const $lastName = createStore<string>('');

const $friends = createStore<any[]>([]);

const $authMode = createStore<'login' | 'registration'>('login');

const emailChanged = createEvent<string>();
const passwordChanged = createEvent<string>();

const firstNameChanged = createEvent<string>();
const lastNameChanged = createEvent<string>();

const changeAuthMode = createEvent<'login' | 'registration'>();
const formSubmitted = createEvent();

$email.on(emailChanged, (_, value) => value);
$password.on(passwordChanged, (_, value) => value);
$firstName.on(firstNameChanged, (_, value) => value);
$lastName.on(lastNameChanged, (_, value) => value);

$email.on(changeAuthMode, (_, value) => '');
$password.on(changeAuthMode, (_, value) => '');

$authMode.on(changeAuthMode, (_, value) => value);

const $formDisabled = or(auth.$pending);

sample({
  clock: formSubmitted,
  filter: () => $authMode.getState() === 'login',
  source: { email: $email, password: $password },
  target: auth.start,
});

sample({
  clock: formSubmitted,
  filter: () => $authMode.getState() === 'registration',
  source: { firstName: $firstName, lastName: $lastName, email: $email, password: $password, friends: $friends },
  target: register.start,
});

sample({
  clock: register.finished.success,
  fn: (clk) => clk.result.data.token,
  target: tokenRecieved,
});

sample({
  clock: auth.finished.success,
  fn: (clk) => clk.result.data.token,
  target: tokenRecieved,
});

redirect({
  clock: auth.$succeeded,
  route: routes.private.feed,
});

redirect({
  clock: register.$succeeded,
  route: routes.private.feed,
});

export {
  $email,
  $password,
  firstNameChanged,
  lastNameChanged,
  $lastName,
  $firstName,
  $formDisabled,
  emailChanged,
  $authMode,
  changeAuthMode,
  formSubmitted,
  passwordChanged,
};
