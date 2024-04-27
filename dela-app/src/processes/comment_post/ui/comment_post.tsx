import { Container } from '@src/shared/ui/container';
import { Borders } from '@src/shared/ui/container/container';
import { Input } from '@src/shared/ui/input';
import { Avatar } from '@src/widgets/avatar/avatar';

import { IconSend2 } from '@tabler/icons-react';
import { useUnit } from 'effector-react';

import { sendComment } from '../model/model';
import cs from './comment.module.scss';

export const CommentPost = ({
  id,
  value,
  set,
}: {
  id: number;
  value: string;
  set: (value: string) => void;
}) => {
  const [send] = useUnit([sendComment]);
  return (
    <Container borders={Borders.Bottom} className={cs.container}>
      <Avatar firstName="Д" lastName="С" />
      <Input
        icon={<IconSend2 />}
        id={`${id}-input`}
        onChange={(e) => set(e.target.value)}
        onIconClick={() => {
          send({ id: id, comment: value });
        }}
        placeholder="Напишите комментарий..."
        value={value}
      />
    </Container>
  );
};
