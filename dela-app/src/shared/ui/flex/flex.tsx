import { Align, Direction, Justify, Props } from '@shared/interfaces/ui/Flex.interfaces';

import cn from 'classnames';

import cs from './flex.module.scss';

export const Flex = ({
  align = Align.Center,
  direction = Direction.Row,
  justify = Justify.Center,
  children,
  className,
  style,
}: React.PropsWithChildren<Props>) => {
  return (
    <div className={cn(cs.container, cs[align], cs[direction], cs[justify], className)} style={style}>
      {children}
    </div>
  );
};
