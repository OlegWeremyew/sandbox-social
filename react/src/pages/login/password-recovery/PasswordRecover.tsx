import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordRecover: FC = () => {
  const navigate = useNavigate();

  const [isConfirmUser, setIsConfirmUser] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('ok');
    if (isConfirmUser) {
      navigate('/login/confirm-email');
      //navigate('/login/sms-confirmation')
    } else {
      setIsConfirmUser(prev => !prev);
    }

  };

  return (
    <div>
      {isConfirmUser ? (
        <>
          <h1>Password Recover</h1>
          <form onSubmit={onSubmit} className={`mainForm`}>
            <label htmlFor="password">
              Password
              <input id="password" type="password" className={`loginInput`} />
            </label>
            <label htmlFor="password">
              Confirm Password
              <input id="password" type="password" className={`loginInput`} />
            </label>
            <button type="submit">Reset Password</button>
          </form>
        </>
      ) : (
        <>
          <h1>Forgot password</h1>
          <form onSubmit={onSubmit} className={`mainForm`}>
            <label htmlFor="user">
              Email
              <input id="mail" type="text" className={`loginInput`} />
            </label>
            <button type="submit">Confirm password</button>
          </form>
        </>
      )}
    </div>
  );
};

export default PasswordRecover;
