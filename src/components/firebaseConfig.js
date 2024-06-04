import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhwSRw3yzZih9Ri0tZcPjA2pfM1hY2Y8g",
    authDomain: "medlog-68fbc.firebaseapp.com",
    projectId: "medlog-68fbc",
    storageBucket: "medlog-68fbc.appspot.com",
    messagingSenderId: "377380908366",
    appId: "1:377380908366:web:66846a742fabd73be8821f",
    measurementId: "G-R0DLKLZPW5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// export { auth, db, app };