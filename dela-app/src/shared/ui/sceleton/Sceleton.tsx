import cn from 'classnames';

import cs from './Sceleton.module.scss';

export const Sceleton = ({
  width,
  height,
  borderRadius = 100,
  className,
  style,
  ...props
}: {
  width?: number;
  height?: number;
  borderRadius?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={cn(cs.load, className)} style={{ width, height, borderRadius, ...style }}></div>
);
