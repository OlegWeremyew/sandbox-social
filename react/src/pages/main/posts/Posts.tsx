import { type FC } from 'react';

import 'swiper/css';
import { MainContentWrapper, SimpleSwiper, SimpleDragAndDrop } from '@/components';

const Posts: FC = () => {
  return (
    <MainContentWrapper title="Posts">
      <SimpleSwiper />
      <SimpleDragAndDrop />
    </MainContentWrapper>
  );
};

export default Posts;
