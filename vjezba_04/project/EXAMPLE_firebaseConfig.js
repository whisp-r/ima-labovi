import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyJ5VWGnGPIyX6ipniLR5Fo5Tr6ePo_bc-key",
  authDomain: "myfirebaseproject-fe314.firebaseapp.com",
  databaseURL: "https://myfirebaseproject-fe314.firebaseio.com",
  projectId: "myfirebaseproject-fe314",
  storageBucket: "myfirebaseproject-fe314.firebasestorage.app",
  messagingSenderId: "sender-id",
  appId: "1:108862498315:android:e765244ac8239ed357c90e",
  measurementId: "108862498315",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
