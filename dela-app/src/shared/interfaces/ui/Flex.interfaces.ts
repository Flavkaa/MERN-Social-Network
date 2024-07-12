import React from 'react';

export enum Align {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Stretch = 'stretch',
  Baseline = 'baseline',
}

export enum Justify {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  SpaceBetween = 'space-between',
}

export enum Direction {
  Row = 'row',
  Column = 'column',
}

export interface Props {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  className?: string;
  style?: React.CSSProperties;
}
