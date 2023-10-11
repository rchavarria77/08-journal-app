// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtUfU0CioCZ2De-U0L6wI5S0MsdwwbvQg',
  authDomain: 'react-cursos-3376b.firebaseapp.com',
  projectId: 'react-cursos-3376b',
  storageBucket: 'react-cursos-3376b.appspot.com',
  messagingSenderId: '117983728652',
  appId: '1:117983728652:web:7eef3066dba83eb97d8a29'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
