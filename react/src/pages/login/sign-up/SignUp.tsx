import { FC, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp: FC = () => {
  const navigate = useNavigate()

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    alert('ok')
    navigate('/login/password-recovery')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit} className={`mainForm`}>
        <label htmlFor="mail">
          Email
          <input id="mail" type="text" className={`loginInput`}/>
        </label>
        <label htmlFor="password">
          Password
          <input id="password" type="password" className={`loginInput`}/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <hr/>
      <div>
        <p>google</p>
        <p>facebook</p>
        <p>linkedin</p>
      </div>
      <div>
        Already a user? <NavLink to='/login'>Login</NavLink>
      </div>
    </div>
  );
};

export default SignUp;
