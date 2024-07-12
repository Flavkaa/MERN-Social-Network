import React from 'react';

import { userQuery } from '@src/entities/user/api/query';
import { useKeyDown } from '@src/shared/hooks/useKeyDown';
import { Container } from '@src/shared/ui/container';
import { Input } from '@src/shared/ui/input';
import { Avatar } from '@src/widgets/avatar/avatar';

import { IconSend2 } from '@tabler/icons-react';
import { useUnit } from 'effector-react';

import { sendPost } from '../model/model';
import cs from './create_post.module.scss';

export const CreatePost = () => {
  const [send] = useUnit([sendPost]);
  const { data: user } = useUnit(userQuery);
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSend = () => {
    send({ userId: user?._id as string, description: value });
    setValue('');
  };

  useKeyDown({ cb: handleSend, key: 'Enter' });

  return (
    <Container className={cs.container}>
      <Avatar firstName={user?.firstName || ''} lastName={user?.lastName || ''} />
      <Input
        icon={<IconSend2 />}
        id={'post-input'}
        onChange={handleChange}
        onIconClick={handleSend}
        placeholder="Как прошёл ваш день?"
        value={value}
      />
    </Container>
  );
};
