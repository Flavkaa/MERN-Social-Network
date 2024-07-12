import React from 'react';

import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Flex } from '@src/shared/ui/flex';
import { Input } from '@src/shared/ui/input';

import cs from './Form.module.scss';

type Props = {
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
};

export const LoginMode = ({ onEmailChange, email, onPasswordChange, password }: Props) => {
  return (
    <Flex className={cs.flex_mod} direction={Direction.Column}>
      <Input
        children={'Почта'}
        id="email"
        onChange={onEmailChange}
        type="email"
        // disabled={disabled}
        value={email}
      />
      <Input
        children={'Пароль'}
        id="password"
        onChange={onPasswordChange}
        // disabled={disabled}
        value={password}
      />
    </Flex>
  );
};
