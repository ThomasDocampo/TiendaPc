import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDjCjP55Zn-8urUi6y-keGFOlFqy0wFko",
  authDomain: "docahard.firebaseapp.com",
  projectId: "docahard",
  storageBucket: "docahard.appspot.com",
  messagingSenderId: "340816243494",
  appId: "1:340816243494:web:0519085d4d16f899aeafe7"
};

const app = initializeApp(firebaseConfig);
ReactDOM.render(  <BrowserRouter>  <App/> </BrowserRouter>, document.getElementById("root"));