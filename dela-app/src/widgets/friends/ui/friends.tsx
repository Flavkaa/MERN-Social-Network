import { userQuery } from '@src/entities/user/model';
import { Container } from '@src/shared/ui/container';
import { Borders } from '@src/shared/ui/container/container';

import { useUnit } from 'effector-react';

export const Friends = () => {
  const { data: user } = useUnit(userQuery);

  return <Container borders={Borders.Bottom}>{user?.friends}</Container>;
};
