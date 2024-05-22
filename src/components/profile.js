import React, { useState, useEffect } from 'react';

function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: '',
    emergencyContact: '',
    conditions: '',
    medications: '',
    allergies: '',
    specialInstructions: '',
    healthcare: '',
    healthcareDetail: '',
  });

  useEffect(() => {
    const savedProfileData = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfileData) {
      setProfileData(savedProfileData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(profileData));
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Profile</h1>
          <p id="profile-username">Hello User</p>
          <a href="javascript:history.back()" className="back-button">Back</a>
        </div>
      </header>
      <main>
        <div className="profile-picture-container">
          <img id="profileImage" src="img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Profile Picture" />
        </div>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name: </label>
          <input type="text" id="name" name="name" value={profileData.name} onChange={handleChange} /><br /><br />

          <label htmlFor="email">Email Address: </label>
          <input type="text" id="email" name="email" value={profileData.email} onChange={handleChange} /><br /><br />

          <label htmlFor="dob">Date of Birth: </label>
          <input type="date" id="dob" name="dob" value={profileData.dob} onChange={handleChange} /><br /><br />

          <label htmlFor="gender">Gender: </label>
          <select name="gender" id="gender" value={profileData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br /><br />

          <label htmlFor="emergencyContact">Emergency Contact Number: </label>
          <input type="text" id="emergencyContact" name="emergencyContact" value={profileData.emergencyContact} onChange={handleChange} /><br /><br />

          <label htmlFor="conditions">Medical Conditions: </label>
          <textarea id="conditions" name="conditions" rows="4" cols="50" value={profileData.conditions} onChange={handleChange}></textarea><br /><br />

          <label htmlFor="medications">Current Medications: </label>
          <textarea id="medications" name="medications" rows="4" cols="50" value={profileData.medications} onChange={handleChange}></textarea><br /><br />

          <label htmlFor="allergies">Allergies: </label>
          <textarea id="allergies" name="allergies" rows="4" cols="50" value={profileData.allergies} onChange={handleChange}></textarea><br /><br />

          <label htmlFor="specialInstructions">Special Instructions: </label>
          <textarea id="specialInstructions" name="specialInstructions" rows="4" cols="50" value={profileData.specialInstructions} onChange={handleChange}></textarea><br /><br />

          <label htmlFor="Healthcare">Healthcare Providers: </label>
          <div className="dropdown">
            <select name="healthcare" id="Healthcare" value={profileData.healthcare} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Hospital">Hospital</option>
              <option value="SL residence">Senior living residence</option>
              <option value="Clinics">Clinics</option>
              <option value="Nurse">Nurse Contact</option>
            </select>
          </div><br />

          <div id="healthcare-details-container">
            <label htmlFor="healthcareDetail">Details: </label>
            <textarea id="healthcareDetail" name="healthcareDetail" rows="4" cols="50" value={profileData.healthcareDetail} onChange={handleChange}></textarea><br /><br />
          </div>

          <button className="save" type="submit">Save</button>

          <div className="bottom-padding"></div>
        </form>

        <div id="profile-info">
          <h2>Profile Information</h2>
          <p id="display-name">Name: {profileData.name}</p>
          <p id="display-email">Email: {profileData.email}</p>
          <p id="display-dob">Date of Birth: {profileData.dob}</p>
          <p id="display-gender">Gender: {profileData.gender}</p>
          <p id="display-emergencyContact">Emergency Contact: {profileData.emergencyContact}</p>
          <p id="display-conditions">Medical Conditions: {profileData.conditions}</p>
          <p id="display-medications">Current Medications: {profileData.medications}</p>
          <p id="display-allergies">Allergies: {profileData.allergies}</p>
          <p id="display-specialInstructions">Special Instructions: {profileData.specialInstructions}</p>
          <p id="display-healthcare">Healthcare Providers: {profileData.healthcare}</p>
          <p id="display-healthcareDetail">Details: {profileData.healthcareDetail}</p>
          <button id="edit-button" onClick={() => {
            document.querySelector('.profile-form').style.display = 'block';
            document.getElementById('profile-info').style.display = 'none';
          }}>Edit</button>
        </div>
      </main>
      <footer>
        <div className="copyright">
          <p>&copy; MedLog 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
