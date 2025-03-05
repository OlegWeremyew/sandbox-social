import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const UserVideo: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      UserVideo - {id}
    </div>
  );
};


export default UserVideo;
