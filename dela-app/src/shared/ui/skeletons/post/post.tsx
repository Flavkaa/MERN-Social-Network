import cn from 'classnames';

import cs from './post.module.scss';
export const Post = ({ className }: { className?: string }) => {
  return <div className={cn(className, cs.container)}>post</div>;
};
