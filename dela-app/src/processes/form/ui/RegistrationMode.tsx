import React from 'react';

import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Flex } from '@src/shared/ui/flex';
import { Input } from '@src/shared/ui/input';

import cs from './Form.module.scss';

type Props = {
  onLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  disabled: boolean;
};

export const RegistrationMode = ({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  firstName,
  lastName,
  email,
  disabled = false,
  onPasswordChange,
  password,
}: Props) => {
  return (
    <Flex className={cs.flex_mod} direction={Direction.Column}>
      <Input children={'Имя'} disabled={disabled} id="name" onChange={onFirstNameChange} value={firstName} />
      <Input children={'Фамилия'} disabled={disabled} id="surname" onChange={onLastNameChange} value={lastName} />
      <Input children={'Почта'} disabled={disabled} id="email" onChange={onEmailChange} type="email" value={email} />
      <Input children={'Пароль'} disabled={disabled} id="password" onChange={onPasswordChange} value={password} />
    </Flex>
  );
};
