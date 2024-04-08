// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZT4EabNmHJznML5f1MhWb5eXtQu8l38",
  authDomain: "auth-integration-d8c43.firebaseapp.com",
  projectId: "auth-integration-d8c43",
  storageBucket: "auth-integration-d8c43.appspot.com",
  messagingSenderId: "1055079863231",
  appId: "1:1055079863231:web:bef854a38c663a777e070a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;