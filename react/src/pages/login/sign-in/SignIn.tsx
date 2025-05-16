import { FC } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';

const SignIn: FC = () => {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>LOGIN</h2>
        <input className="text-input" type="email" placeholder="Email" />
        <input className="text-input" type="password" placeholder="Password" />
        <div className="remember-me">
          <input className="checkbox" type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me?</label>
        </div>
        <button className="btn">LOGIN</button>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
        <p>OR</p>
        <div className="social-icons">
          <button className="google">G</button>
          <button className="facebook">F</button>
          <button className="linkedin">in</button>
        </div>
        <p>
          Need an account? <Link to="/login/sign-up">SIGN UP</Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
