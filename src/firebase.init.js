// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb2DYPy1GSCr_DXBkalXnLWupZGvIdmlA",
  authDomain: "body-builder-43fde.firebaseapp.com",
  projectId: "body-builder-43fde",
  storageBucket: "body-builder-43fde.appspot.com",
  messagingSenderId: "1069341710207",
  appId: "1:1069341710207:web:4771e70ddc42ba7a642c4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
