import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ9gKwZgAg3K6XZ2junmVdWcDKoc8KgL4",
  authDomain: "evernote-clone-2d976.firebaseapp.com",
  databaseURL: "https://evernote-clone-2d976.firebaseio.com",
  projectId: "evernote-clone-2d976",
  storageBucket: "evernote-clone-2d976.appspot.com",
  messagingSenderId: "368780706463",
  appId: "1:368780706463:web:eadb4a65993acf5aa658aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);









ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
