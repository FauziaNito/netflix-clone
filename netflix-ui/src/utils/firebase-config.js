import { initializeApp } from "firebase/app";

import {getAuth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyAf6UgXLl9A-CwBoH602m8hOF-MGht7yFw",

  authDomain: "react-netflix-clone-70368.firebaseapp.com",

  projectId: "react-netflix-clone-70368",

  storageBucket: "react-netflix-clone-70368.appspot.com",

  messagingSenderId: "744459691996",

  appId: "1:744459691996:web:a951c44ddf9012b259d119",

  measurementId: "G-R4F5N2FEQF"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
