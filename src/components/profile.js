import React, { useState, useEffect } from 'react';


export default function Profile() {
  return (
    <div className='background'>
      <div className="profile-picture-container">
        <img id="profileImage" src="image/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Profile Picture" />
      </div>
      <header>

        <div class="container">
          <h1>Profile</h1>
          <p>Hello User</p>
          <a href="javascript:history.back()" class="back-button">Back</a>
        </div>

      </header>
      <form className="profile-form">
        <label htmlFor="name">Full name: </label>
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="email">Email Address: </label>
        <input type="text" id="email" name="email" /><br /><br />

        <label htmlFor="dob">Date of Birth: </label>
        <input type="date" id="dob" name="dob" /><br /><br />

        <label htmlFor="gender">Gender: </label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select><br /><br />

        <label htmlFor="emergencyContact">Emergency Contact Number: </label>
        <input type="text" id="emergencyContact" name="emergencyContact" /><br /><br />

        <label htmlFor="conditions">Medical Conditions: </label>
        <textarea id="conditions" name="conditions" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="medications">Current Medications: </label>
        <textarea id="medications" name="medications" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="allergies">Allergies: </label>
        <textarea id="allergies" name="allergies" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="specialInstructions">Special Instructions: </label>
        <textarea id="specialInstructions" name="specialInstructions" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="Healthcare">Healthcare Providers: </label>
        <div className="dropdown">
          <select name="Healthcare" id="Healthcare">
            <option value="Hospital name">Hospital</option>
            <option value="SL residence">Senior living residence</option>
            <option value="Clinics">Clinics</option>
            <option value="Nurse">Nurse Contact</option>
          </select>
        </div><br /><br />

        <button className="save" type="submit">Save</button>

        <div className="bottom-padding"></div>
      </form>
    </div>
  );
}