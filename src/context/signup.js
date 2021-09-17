import { useState, createContext } from 'react';

const SignUpContext = createContext();

const SignUpContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  return <SignUpContext.Provider value={{ email, setEmail }}>{children}</SignUpContext.Provider>;
};

export { SignUpContextProvider, SignUpContext };
