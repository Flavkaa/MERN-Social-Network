export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: InputVariant;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export enum InputVariant {
  Disabled = 'disabled',
  Loading = 'loading',
  Error = 'error',
}
