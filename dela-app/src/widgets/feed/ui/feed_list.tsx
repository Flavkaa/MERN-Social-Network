import { Post } from '@src/entities/post';

import { useUnit } from 'effector-react';

import { feedQuery } from '../model/model';
import cs from './list.module.scss';

export const FeedList = () => {
  const { data } = useUnit({
    data: feedQuery.$data,
    pending: feedQuery.$pending,
  });

  return (
    <div className={cs.container}>
      {data?.map((item) => {
        return <Post key={item?.userId + item?.createdAt + item?.comments.length} {...item} />;
      })}
    </div>
  );
};
