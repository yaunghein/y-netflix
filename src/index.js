import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContextProvider } from './context/firebase';

ReactDOM.render(
  <FirebaseContextProvider>
    <GlobalStyles />
    <App />
  </FirebaseContextProvider>,
  document.getElementById('root')
);
