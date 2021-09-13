import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: 'AIzaSyDvLVx9WvMXt9cdh8IrHYxND54ccRoULv4',
  authDomain: 'y-netflix-clone.firebaseapp.com',
  databaseURL: 'https://y-netflix-clone.firebaseio.com',
  projectId: 'y-netflix-clone',
  storageBucket: 'y-netflix-clone.appspot.com',
  messagingSenderId: '762063313619',
  appId: '1:762063313619:web:e470ff4808f8a714119226',
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
