import { FC, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn: FC = () => {
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('ok');
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className={`mainForm`}>
        <label htmlFor="mail">
          Email
          <input id="mail" type="text" className={`loginInput`} />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" type="password" className={`loginInput`}/>
        </label>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Forgot Password?</p>
      <hr />
      <div>
        <p>google</p>
        <p>facebook</p>
        <p>linkedin</p>
      </div>
      <div>
        need an account? <NavLink to="/login/sign-up">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default SignIn;
