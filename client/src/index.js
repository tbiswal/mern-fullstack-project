import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from 'firebase/app';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: 'AIzaSyCFVPuMe07w88hzUctYUUp1OBRIajgZGfY',
  authDomain: 'my-mern-project-6af48.firebaseapp.com',
  projectId: 'my-mern-project-6af48',
  storageBucket: 'my-mern-project-6af48.appspot.com',
  messagingSenderId: '786423982418',
  appId: '1:786423982418:web:f780f2ff7322a59028b28b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
