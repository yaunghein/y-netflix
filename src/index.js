import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContextProvider } from './context/firebase';
import { SignUpContextProvider } from './context/signup';

ReactDOM.render(
  <FirebaseContextProvider>
    <SignUpContextProvider>
      <GlobalStyles />
      <App />
    </SignUpContextProvider>
  </FirebaseContextProvider>,
  document.getElementById('root')
);
