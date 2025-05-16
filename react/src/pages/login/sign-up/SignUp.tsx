import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const SignUp: FC = () => {
  // const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>SIGN UP</h2>
        <input className="text-input" type="email" placeholder="Email" />
        <input className="text-input" type="password" placeholder="Password" />
        <span className="flex justify-around items-center" onClick={handleTogglePasswordVisibility}>
          <Icon icon={isVisible ? eye : eyeOff} size={25} />
        </span>
        <button className="btn">SIGN UP</button>
        <p>OR</p>
        <div className="social-icons">
          <button className="google">G</button>
          <button className="facebook">F</button>
          <button className="linkedin">in</button>
        </div>
        <p>
          Already a user? <Link to="/login">SIGN IN</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
