import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const { email, password } = loginData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in successfully
        navigate('/Profile');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='auth-background'>
      <div className='auth-card'>
        <header>
          <div className="auth-container">
            <h1>Log In</h1>
            <p>Welcome back user!</p>
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
          </div>
        </header>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address: </label>
          <input type="email" id="email" name="email" value={loginData.email} onChange={handleChange} required />

          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required />

          <button type="submit" className="submit-button">Log In</button>
          <p>Don't have an account? <Link to="/SignUp">Sign up here</Link></p>
        </form>
      </div>
    </div>
  );
}
