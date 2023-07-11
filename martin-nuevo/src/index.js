import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiqGQ3trGFmX4mJA2UIlSHK3wXH3AJ7CA",
  authDomain: "martin-pablo.firebaseapp.com",
  projectId: "martin-pablo",
  storageBucket: "martin-pablo.appspot.com",
  messagingSenderId: "437211420114",
  appId: "1:437211420114:web:1ffc960a0213da1489e40b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


