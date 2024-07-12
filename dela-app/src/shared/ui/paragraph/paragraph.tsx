import React from 'react';

import cn from 'classnames';

import cs from './paragraph.module.scss';

export type SizeVariant = 'l' | 'xl' | 's' | 'm';

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  title?: string;
  className?: string;
  size?: SizeVariant;
  tag?: React.ElementType;
  isLoading?: boolean;
}

export const Paragraph = ({
  title,
  className,
  children,
  size,
  isLoading,
  tag: Tag = 'p',
  ...props
}: TitleProps) => {
  return (
    <Tag
      className={cn(
        cs.title,
        className,
        size && cs[size as SizeVariant],
        isLoading && cs.isLoading,
      )}
      {...props}
    >
      {title || children}
    </Tag>
  );
};
