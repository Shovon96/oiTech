// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaqxBMERXaAizZILiJnIFi_ESbqmEzXiI",
  authDomain: "react-auth-itegration.firebaseapp.com",
  projectId: "react-auth-itegration",
  storageBucket: "react-auth-itegration.appspot.com",
  messagingSenderId: "934681490106",
  appId: "1:934681490106:web:9c03d5818d24851bbe8883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;