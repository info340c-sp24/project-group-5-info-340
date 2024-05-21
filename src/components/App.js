import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Header from './Header.js';
import MedPage from './Medlog.js';
import Alarm from './Alarm.js';
import Login from './LogIn.js';
import SignUp from './SignUp.js';
import '../index.js';




export function App(props) {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Medlog" element={<MedPage />} />
          <Route path="/Alarm" element={<Alarm />} />
          <Route path="/LogIn" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
