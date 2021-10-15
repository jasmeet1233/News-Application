import { initializeApp } from "@firebase/app";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt0Q98y3nv1ML5zJJye7qNrxL2HOQbWx8",
  authDomain: "offline-newsapp-authentication.firebaseapp.com",
  projectId: "offline-newsapp-authentication",
  storageBucket: "offline-newsapp-authentication.appspot.com",
  messagingSenderId: "306957416093",
  appId: "1:306957416093:web:b97fb18851fd03f5ce4674",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
