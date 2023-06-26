import React, { createContext } from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHwy0b4UhQfjyRdt7ZlnRa6trr5XvAAlI",
  authDomain: "randys-chat-176ef.firebaseapp.com",
  projectId: "randys-chat-176ef",
  storageBucket: "randys-chat-176ef.appspot.com",
  messagingSenderId: "868060487799",
  appId: "1:868060487799:web:a5a401a27a762c64a1a672",
  measurementId: "G-JTXX63CTC6"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
      <App />
    </Context.Provider>
  );
    