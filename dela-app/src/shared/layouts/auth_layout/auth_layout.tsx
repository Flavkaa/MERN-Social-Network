import React from 'react';

import cs from './layout.module.scss';

export const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <body className={cs.layout}>
      <div>{children}</div>
    </body>
  );
};
