import React from 'react';

export type InputProps = React.ComponentProps<'input'> & {
  variant?: InputVariant;
  icon?: React.ReactNode;
  onIconClick?: () => void;
};

export enum InputVariant {
  Disabled = 'disabled',
  Loading = 'loading',
  Error = 'error',
}
