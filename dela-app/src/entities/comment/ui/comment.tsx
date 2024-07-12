import React from 'react';

import { formatDateTime } from '@src/shared/helpers/formatDate';
import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Container } from '@src/shared/ui/container';
import { Flex } from '@src/shared/ui/flex';
import { Paragraph } from '@src/shared/ui/paragraph/paragraph';
import { Avatar } from '@src/widgets/avatar/avatar';

import cs from './comment.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  text: string;
  createdAt: Date;
};

export const Comment = ({ firstName, lastName, text, createdAt }: Props) => {
  return (
    <Container className={cs.container}>
      <Flex className={cs.author} direction={Direction.Column}>
        <Avatar firstName={firstName || ''} lastName={lastName || firstName ? firstName[1] : ''} />
        <Flex direction={Direction.Column}>
          <Paragraph>
            {firstName} {lastName}
          </Paragraph>
          <Paragraph>{createdAt && formatDateTime(createdAt)}</Paragraph>
        </Flex>
      </Flex>
      <Paragraph className={cs.p}>{text}</Paragraph>
    </Container>
  );
};
