import React, { FormEventHandler } from 'react';

import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Button } from '@src/shared/ui/button';
import { Container } from '@src/shared/ui/container';
import { Flex } from '@src/shared/ui/flex';
import { Input } from '@src/shared/ui/input';

import { useUnit } from 'effector-react';

import {
  $authMode,
  $email,
  $firstName,
  $formDisabled,
  $lastName,
  $password,
  changeAuthMode,
  emailChanged,
  firstNameChanged,
  formSubmitted,
  lastNameChanged,
  passwordChanged,
} from '../model/model';
import cs from './Form.module.scss';
import { LoginMode } from './LoginMode';
import { RegistrationMode } from './RegistrationMode';

export interface IAuthForm {
  email: string;
  password: string;
}

export const Form = () => {
  const [email, password, firstName, lastName, submitForm, disabled, authMode, changeMode] = useUnit([
    $email,
    $password,
    $firstName,
    $lastName,
    formSubmitted,
    $formDisabled,
    $authMode,
    changeAuthMode,
  ]);

  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    submitForm();
  };

  const onFirstNameChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    firstNameChanged(e.target.value);
  }, []);

  const onLastNameChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    lastNameChanged(e.target.value);
  }, []);

  const onEmailChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    emailChanged(e.target.value);
  }, []);

  const onPasswordChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChanged(e.target.value);
  }, []);

  console.log(firstName, lastName);

  return (
    <Container className={cs.container}>
      <form onSubmit={onFormSubmit}>
        {authMode === 'login' && (
          <LoginMode
            email={email || ''}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            password={password}
          />
        )}
        {authMode === 'registration' && (
          <RegistrationMode
            disabled={disabled}
            email={email || ''}
            firstName={firstName}
            lastName={lastName}
            onEmailChange={onEmailChange}
            onFirstNameChange={onFirstNameChange}
            onLastNameChange={onLastNameChange}
            onPasswordChange={onPasswordChange}
            password={password}
          />
        )}
        <Button
          children={authMode === 'login' ? 'Войти' : 'Зарегестрироваться'}
          disabled={disabled}
          loading={false}
          type="submit"
          variant={'primary'}
        />
        <Button
          children={authMode === 'login' ? 'Нет аккаунта? Зарегестрироваться' : 'Есть аккаунт? Войти'}
          disabled={disabled}
          loading={false}
          onClick={() => {
            changeMode(authMode === 'login' ? 'registration' : 'login');
          }}
          type="button"
          variant={'link'}
        />
      </form>
    </Container>
  );
};
