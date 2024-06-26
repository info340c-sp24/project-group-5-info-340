import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';


const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name } = signUpData;
    const db = getDatabase();
    const query = ref(db, "MedLog/User/SignIn");


    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      // Write user data to Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        name,
        email,
      });


      navigate('/Profile'); // Redirect to profile page after successful signup
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email address is already in use.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };


  return (
    <div className="auth-background">
      <div className="auth-card">
        <header>
          <div className="auth-container">
            <h1>Sign Up</h1>
            <p>Create your account!</p>
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
          </div>
        </header>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name: </label>
          <input type="text" id="name" name="name" value={signUpData.name} onChange={handleChange} required />


          <label htmlFor="email">Email Address: </label>
          <input type="email" id="email" name="email" value={signUpData.email} onChange={handleChange} required />


          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={signUpData.password} onChange={handleChange} required />


          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p>Already have an account? <a href="/login">Log in here</a></p>
      </div>
    </div>
  );
}


export default SignUp;



