import React from 'react';

import { useAnimation } from 'framer-motion';

export function useScrollVisibility({
  height,
  duration,
  startPos = 30,
}: {
  height: number;
  duration: number;
  startPos?: number;
}) {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  React.useEffect(() => {
    controls.start({ y: visible ? startPos : height, transition: { duration } });
  }, [visible, controls]);

  return {
    visible,
    controls,
  };
}
