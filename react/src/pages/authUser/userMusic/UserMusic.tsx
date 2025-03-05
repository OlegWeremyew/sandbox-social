import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const UserMusic: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      UserMusic - {id}
    </div>
  );
};


export default UserMusic;
