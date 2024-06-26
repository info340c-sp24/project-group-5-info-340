import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect , Navigate} from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Header from './Header.js';
import MedPage from './Medlog.js';
import Alarm from './Alarm.js';
import Login from './LogIn.js';
import SignUp from './SignUp.js';
import MedForm from './MedlogForm.js';
import Profile from './Profile.js';
import MED_DATA from '../data/medication.json'

import '../index.js';


export function App(props) {
    return (
        <Router>
            {/* <div className=''> */}
                <Header />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Medlog" element={<MedPage />} />
                    <Route path="/Alarm" element={<Alarm />} />
                    <Route path="/LogIn" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/MedlogForm" element={<MedForm data={MED_DATA} />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/" element={<Navigate to="/Login" />} />
                </Routes>
                <Footer />
            {/* </div> */}
        </Router>
    );
}

export default App;