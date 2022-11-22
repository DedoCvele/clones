// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjeC6ficzasgL-MTCuil2OnnOi8pejpMc",
  authDomain: "disney-clone-e42fe.firebaseapp.com",
  projectId: "disney-clone-e42fe",
  storageBucket: "disney-clone-e42fe.appspot.com",
  messagingSenderId: "344741289825",
  appId: "1:344741289825:web:a3000671b48b4327626f20",
  measurementId: "G-8RZZLSM4M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);