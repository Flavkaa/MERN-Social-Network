import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { IconBrandTabler } from '@tabler/icons-react';

import styles from './animated-container.module.scss';

const AnimatedContainer = () => {
  const [isFull, setIsFull] = React.useState(true);
  const ref = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  const nodeRef = isFull ? textRef : iconRef;

  const handleClick = () => {
    setIsFull(!isFull);
  };
  return (
    <CSSTransition
      classNames={{
        enter: styles['button-enter'],
        enterActive: styles['button-enter-active'],
        enterDone: styles['button-enter-done'],
        exit: styles['button-exit'],
        exitActive: styles['button-exit-active'],
        exitDone: styles['button-exit-done'],
      }}
      in={!isFull}
      nodeRef={ref}
      timeout={1000}
    >
      <button className={styles.button} onClick={handleClick} ref={ref}>
        <SwitchTransition>
          <CSSTransition
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              enterDone: styles['fade-enter-done'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active'],
              exitDone: styles['fade-exit-done'],
            }}
            key={isFull ? 'hello' : 'icon'}
            nodeRef={nodeRef}
            timeout={300}
          >
            <span className={styles.text} ref={nodeRef}>
              {isFull ? 'Привет' : <IconBrandTabler />} {/* Условие для отображения иконки */}
            </span>
          </CSSTransition>
        </SwitchTransition>
      </button>
    </CSSTransition>
  );
};
export default AnimatedContainer;
