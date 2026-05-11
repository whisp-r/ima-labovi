// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkAWBxVv6EXFSIm1B2Swadqho6K_W_cNk",
  authDomain: "vjezba04-10a3f.firebaseapp.com",
  projectId: "vjezba04-10a3f",
  storageBucket: "vjezba04-10a3f.firebasestorage.app",
  messagingSenderId: "934901276966",
  appId: "1:934901276966:web:6f20ae443298ccfb0c61e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
