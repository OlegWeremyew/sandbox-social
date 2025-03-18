import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/config.ts';
import { increment } from '@/store/features/counter/counterSlice.ts';
import { MainContentWrapper } from '@/components';

const Home: FC = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementClick = () => {
    dispatch(increment());
  };

  return (
    <MainContentWrapper>
      Home - {counter}
      <button onClick={incrementClick}>+</button>
    </MainContentWrapper>
  );
};

export default Home;
