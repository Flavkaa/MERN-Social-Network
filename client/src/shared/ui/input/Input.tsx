import React from 'react';

import { InputProps } from '@/src/shared/interfaces/ui/Input.interfaces';
import cn from 'classnames';

import { mainFont } from '../../fonts/MainFont';
import cs from './Input.module.scss';

export const Input = ({ id, children, ...props }: InputProps) => {
  return (
    <React.Fragment>
      <span className={cs.container}>
        <label className={cn(cs.label, mainFont.className)} htmlFor={id}>
          {children}
        </label>
        <label className={cs.input_container}>
          <input className={cn(cs.input, mainFont.className)} id={id} {...props} />
        </label>
      </span>
    </React.Fragment>
  );
};
