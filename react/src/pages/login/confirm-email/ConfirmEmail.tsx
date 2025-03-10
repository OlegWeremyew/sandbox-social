import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmEmail: FC = () => {
  const navigate = useNavigate();

  const onSubmit = (): void => {
    navigate('/');
  };

  return (
    <div>
      <h1>Confirm Email</h1>
      <button type="button" onClick={onSubmit}>Confirm Email</button>
    </div>
  );
};

export default ConfirmEmail;
