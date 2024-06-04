import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref as databaseRef, set, get } from 'firebase/database';
import { db, realtimedb } from '../components/firebaseConfig';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';

export default function Profile() {
  const navigate = useNavigate();
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
    profileImage: 'image/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
  });
  const [showHealthcareInput, setShowHealthcareInput] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetching data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setProfileData(userDoc.data());
        }
        // Fetching data from Realtime Database
        const profileQuery = databaseRef(realtimedb, `MedLog/User/Profile/${user.uid}`);
        const profileSnapshot = await get(profileQuery);
        if (profileSnapshot.exists()) {
          setProfileData(profileSnapshot.val());
        }
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHealthcareChange = (e) => {
    const { value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      healthcare: value,
    }));
    setShowHealthcareInput(value === 'other');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const profileQuery = databaseRef(realtimedb, `MedLog/User/Profile/${user.uid}`);
      try {
        await setDoc(userDocRef, profileData);
        await set(profileQuery, profileData);
      } catch (error) {
        setError('Failed to save profile data');
      }
    }
  };

  return (
    <div className="profile-background">
      <Container fluid className="profile-container">
        <Row className="profile-header">
          <Col md="auto">
            <div className="profile-picture">
              <Image
                src="image/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                roundedCircle
              />
            </div>
          </Col>
          <Col>
            <div className="profile-details">
              <h1>{profileData.name || 'Profile'}</h1>
              <p>{profileData.email}</p>
              <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
          </Col>
        </Row>
        <Form className="profile-form" onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              disabled
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={profileData.dob}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Emergency Contact</Form.Label>
            <Form.Control
              type="text"
              name="emergencyContact"
              value={profileData.emergencyContact}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Conditions</Form.Label>
            <Form.Control
              type="text"
              name="conditions"
              value={profileData.conditions}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Medications</Form.Label>
            <Form.Control
              type="text"
              name="medications"
              value={profileData.medications}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Allergies</Form.Label>
            <Form.Control
              type="text"
              name="allergies"
              value={profileData.allergies}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Special Instructions</Form.Label>
            <Form.Control
              type="text"
              name="specialInstructions"
              value={profileData.specialInstructions}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Healthcare Provider</Form.Label>
            <Form.Control
              as="select"
              name="healthcare"
              value={profileData.healthcare}
              onChange={handleHealthcareChange}
            >
              <option value="">Select...</option>
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
              <option value="other">Other</option>
            </Form.Control>
            {showHealthcareInput && (
              <Form.Control
                type="text"
                name="healthcareOther"
                placeholder="Please specify"
                value={profileData.healthcareOther || ''}
                onChange={handleChange}
                className="mt-2"
              />
            )}
          </Form.Group>
          <Button type="submit" className="save-button">Save</Button>
        </Form>
        {error && <p className="text-danger">{error}</p>}
      </Container>
    </div>
  );
}
