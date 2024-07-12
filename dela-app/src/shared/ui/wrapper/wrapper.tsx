import cn from 'classnames';

import cs from './wrapper.module.scss';

export const Wrapper = ({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) => {
  return <div className={cn(cs.container, className)}>{children}</div>;
};
