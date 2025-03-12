import { FC } from 'react';
import { useParams } from 'react-router-dom';

const Schedule: FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      Schedule - {id}
    </div>
  );
};

export default Schedule;
