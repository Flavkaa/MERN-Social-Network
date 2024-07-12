import React from 'react';

import { ButtonProps } from '@shared/interfaces/ui/Button.interfaces';

import cn from 'classnames';

import { Loader } from '../loader';
import cs from './Button.module.scss';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, variant = 'primary', ...props }, ref) => {
    const styles = React.useMemo(() => {
      return cn({ [cs.primary]: variant === 'primary' }, { [cs.loading]: loading }, { [cs.link]: variant === 'link' });
    }, [variant]);

    return (
      <button className={styles} ref={ref} {...props}>
        {loading ? <Loader /> : children}
      </button>
    );
  },
);
