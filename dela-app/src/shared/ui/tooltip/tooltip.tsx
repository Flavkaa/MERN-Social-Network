import React, { CSSProperties } from 'react';

import { useScrolled } from '@src/shared/hooks/useScrolled';

import { Portal } from '../portal';
import cs from './tooltip.module.scss';

type Props = {
  children: React.ReactNode;
  type?: 'up' | 'down' | 'left' | 'right';
  text: string;
};

export const Tooltip = React.memo(({ children, type = 'up', text }: Props) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [coords, setCoords] = React.useState<{ top?: number; left?: number } | CSSProperties>({
    top: 0,
    left: 0,
  });
  const tooltipRef = React.useRef<React.ElementRef<'div'>>(null);

  const generateCoords = () => {
    const rect = tooltipRef.current?.getBoundingClientRect();

    const scrolled = window.scrollY;

    let coordinates: typeof coords = {};

    if (!rect) {
      return;
    }

    if (type === 'up') {
      coordinates = {
        top: rect.top + scrolled - rect.height / 2,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, -100%)',
      };
    }
    if (type === 'down') {
      coordinates = {
        top: rect.bottom + scrolled + rect.height / 2,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, 0)',
      };
    }
    if (type === 'left') {
      coordinates = {
        top: rect.top + scrolled + rect.height / 2,
        left: rect.left + window.scrollX - rect.width,
        transform: 'translate(-100%, -50%)',
      };
    }
    if (type === 'right') {
      coordinates = {
        top: rect.top + scrolled + rect.height / 2,
        left: rect.right + window.scrollX,
        transform: 'translate(0, -50%)',
      };
    }

    setCoords(coordinates);
  };

  const showTooltip = React.useCallback(() => {
    generateCoords();
    setVisible(true);
  }, []);

  const hideTooltip = React.useCallback(() => {
    setVisible(false);
  }, []);

  useScrolled(hideTooltip);

  return (
    <div className={cs.tooltip_container} onMouseEnter={showTooltip} onMouseLeave={hideTooltip} ref={tooltipRef}>
      {children}
      {visible && (
        <Portal>
          <div className={cs.tooltip} style={{ ...coords }}>
            {text}
          </div>
        </Portal>
      )}
    </div>
  );
});
