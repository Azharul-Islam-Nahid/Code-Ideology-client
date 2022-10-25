// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLRUQtteJM-l02cTTWCCGLiGndyOgKud4",
    authDomain: "code-ideology.firebaseapp.com",
    projectId: "code-ideology",
    storageBucket: "code-ideology.appspot.com",
    messagingSenderId: "110598996169",
    appId: "1:110598996169:web:d9f437e5cc2ed8a868cd18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;