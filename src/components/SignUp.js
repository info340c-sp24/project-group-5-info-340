import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignUp(props) {
  const navigate = useNavigate();
  const [SignUpData, setSignData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const { email, password } = SignUpData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
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
          <h1>Sign Up</h1>
          <p>Create your account!</p>
          <a href="javascript:history.back()" class="back-button">Back</a>
        </div>

      </header>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address: </label>
        <input type="text" id="email" name="email" value={SignUpData.email} onChange={handleChange} required /><br /><br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" value={SignUpData.password} onChange={handleChange} required /><br /><br />

        <Link to="/Profile" className='submit' aria-label='Submit Button'><button>Submit</button></Link>
        {/* <button className="SignUp" type="submit">Submit</button> */}
      </form>
    </div>
  );
}
