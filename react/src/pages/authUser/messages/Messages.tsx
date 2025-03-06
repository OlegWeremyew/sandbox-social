import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const Messages: FC = () => {
  const { id } = useParams();
  return (
    <div>
      Messages - {id}
    </div>
  );
};

export default Messages;
