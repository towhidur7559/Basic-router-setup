// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClid0LwgFF_Afu_vALtJFowxf8-_pmSvw",
  authDomain: "basic-router-setup.firebaseapp.com",
  projectId: "basic-router-setup",
  storageBucket: "basic-router-setup.appspot.com",
  messagingSenderId: "960184092151",
  appId: "1:960184092151:web:7e822e105094a145739af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);