import cn from 'classnames';

import cs from './container.module.scss';

export enum Borders {
  Top = 'top',
  Bottom = 'bottom',
  Null = 'null',
  All = 'all',
  NoRadius = 'no_radius',
}

export enum Padding {
  sm = 'sm',
  md = 'md',
  xl = 'xl',
}

export const Container = ({
  children,
  className,
  padding = Padding.sm,
  borders = Borders.All,
  isLoading,
}: React.PropsWithChildren<{
  className?: string;
  borders?: Borders;
  padding?: Padding;
  isLoading?: boolean;
}>) => {
  return (
    <div
      className={cn(cs.container, className, cs[borders as Borders], cs[padding as Padding], isLoading && cs.isLoading)}
    >
      {children}
    </div>
  );
};
