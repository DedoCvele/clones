// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzVuvZV12ePFtXvxNsMA-xi4NzjoVDQuk",
  authDomain: "clone-fc3d0.firebaseapp.com",
  projectId: "clone-fc3d0",
  storageBucket: "clone-fc3d0.appspot.com",
  messagingSenderId: "719978493943",
  appId: "1:719978493943:web:13db568ca707e04cd8a0f2",
  measurementId: "G-SZ5DRL0ETR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);