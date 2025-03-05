import { FC } from 'react';
import { useParams } from 'react-router-dom';

const User: FC = () => {
  const { id } = useParams();
  return (
    <div>
      User - {id}
    </div>
  );
};


export default User;
