import { InputProps } from '@shared/interfaces/ui/Input.interfaces';

import cn from 'classnames';

import cs from './Input.module.scss';

export const Input = ({ id, children, icon, onIconClick, ...props }: InputProps) => {
  return (
    <span className={cs.container}>
      <label className={cn(cs.label)} htmlFor={id}>
        {children}
      </label>
      <label className={cs.input_container}>
        <input className={cn(cs.input)} id={id} {...props} />
      </label>
      {icon && (
        <button className={cs.icon} onClick={onIconClick}>
          {icon}
        </button>
      )}
    </span>
  );
};
