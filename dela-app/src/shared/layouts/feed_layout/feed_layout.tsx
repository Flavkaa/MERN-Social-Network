import React from 'react';

import { useScrollVisibility } from '@src/shared/hooks/useScrollVisibility';
import { Header } from '@src/shared/ui/header';

import { motion } from 'framer-motion';

import cs from './layout.module.scss';

export const FeedLayout = ({ children }: React.PropsWithChildren) => {
  const { controls } = useScrollVisibility({ height: 0, duration: 0.2, startPos: 75 });
  return (
    <body className={cs.container}>
      <Header />
      <motion.div animate={controls} className={cs.content}>
        {children}
      </motion.div>
    </body>
  );
};
