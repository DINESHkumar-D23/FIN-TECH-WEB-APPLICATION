import React, { useState } from 'react';
import '../css/LoginSignUp.css';
import envelope from '../assets/envelope.png';
import telephone from '../assets/telephone.png';
import user from '../assets/user.png';
import password from '../assets/password.png';
import axios from 'axios';

const LoginSignUp = () => {
  const [action, setAction] = useState("SignUp");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async () => {
    try {
      if (action === 'SignUp') {
        const response = await axios.post('http://localhost:5000/api/signup', {
          name,
          phone,
          email,
          password: pwd
        });
        alert(response.data.message);
      } else {
        const response = await axios.post('http://localhost:5000/api/login', {
          email,
          password: pwd
        });
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  return (
    <div className='LSC'>
      <div className="LScontainer">
        <div className="Header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={user} alt="User" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <img src={telephone} alt="Phone" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={envelope} alt="Email" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
        </div>

        {action === "SignUp" ? null : (
          <div className="forgot-pwd">Forgot password? <span>Click Here!</span></div>
        )}

        <div className="submit-container">
          <div className="submit" onClick={handleSubmit}>
            {action}
          </div>
        </div>

        <div className="toggle-action">
          {action === "SignUp" ? (
            <p>After SignUp please Login / Already have an account ? <span onClick={() => setAction("Login")}>Login</span></p>
          ) : (
            <p>Don't have an account? <span onClick={() => setAction("SignUp")}>SignUp</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
