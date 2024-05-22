import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export default function LogIn(props) {
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
    <div className='background'>
      <header>
        <div class="container">
          <h1>Log In</h1>
          <p>Welcome back user!</p>
          <a href="javascript:history.back()" class="back-button">Back</a>
        </div>

      </header>
      <div className='form'>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address: </label>
        <input type="text" id="email" name="email" value={loginData.email} onChange={handleChange} required /><br /><br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required /><br /><br />

        <Link to="/Profile" className='submit' aria-label='Submit Button'><button>Submit</button></Link>

        {/* <button className="login" type="submit">Submit</button> */}
        <p>Don't have an account? <Link to="/SignUp">Sign up here</Link></p>
      </form>
      </div>
    </div>
  );
}
