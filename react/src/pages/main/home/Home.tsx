import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/config.ts';
import { increment } from '@/store/features/counter/counterSlice.ts';

const Home: FC = () => {
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      Home - {counter}
      <button onClick={incrementClick}>+</button>
    </div>
  );
};

export default Home;
