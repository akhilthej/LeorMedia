// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEtNXfo7jKy9JJ7ldz9gZmbW5RA-dF6tY",
  authDomain: "leormediareactapp.firebaseapp.com",
  projectId: "leormediareactapp",
  storageBucket: "leormediareactapp.appspot.com",
  messagingSenderId: "719610885853",
  appId: "1:719610885853:web:3664c6d10ca3d8306ecd34",
  measurementId: "G-JQET9N63ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);