// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0QtDUwesJhrmtkJmrizUtmdw2jYXLA6c',
  authDomain: 'stickypills-9597e.firebaseapp.com',
  projectId: 'stickypills-9597e',
  storageBucket: 'stickypills-9597e.appspot.com',
  messagingSenderId: '966567976626',
  appId: '1:966567976626:web:d534a7c79a17385ac8f3ab',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore;
