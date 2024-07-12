import cs from '@src/entities/post/ui/post.module.scss';
import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';

import { Container } from '../../container';
import { Borders } from '../../container/container';
import { Flex } from '../../flex';
import { Sceleton } from '../Sceleton';

export const PostSkeleton = () => {
  return (
    <Container borders={Borders.All} className={cs.sceleton}>
      <Flex direction={Direction.Row}>
        <Sceleton height={60} width={60} />
        <Sceleton height={16} width={40} />
      </Flex>
      <Sceleton height={16} width={500} />
    </Container>
  );
};
