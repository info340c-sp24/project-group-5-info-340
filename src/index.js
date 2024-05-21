import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhwSRw3yzZih9Ri0tZcPjA2pfM1hY2Y8g",
  authDomain: "medlog-68fbc.firebaseapp.com",
  projectId: "medlog-68fbc",
  storageBucket: "medlog-68fbc.appspot.com",
  messagingSenderId: "377380908366",
  appId: "1:377380908366:web:66846a742fabd73be8821f",
  measurementId: "G-R0DLKLZPW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
