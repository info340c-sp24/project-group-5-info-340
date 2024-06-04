import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBhwSRw3yzZih9Ri0tZcPjA2pfM1hY2Y8g",
  authDomain: "medlog-68fbc.firebaseapp.com",
  projectId: "medlog-68fbc",
  storageBucket: "medlog-68fbc.appspot.com",
  messagingSenderId: "377380908366",
  appId: "1:377380908366:web:66846a742fabd73be8821f",
  measurementId: "G-R0DLKLZPW5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimedb = getDatabase(app);


export { auth, db, storage,realtimedb };
