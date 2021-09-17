import { useState, useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { Form } from '../components';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [seenPassword, setSeenPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const focusRef = useRef(null);

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => history.push(ROUTES.BROWSE))
      .catch(error => {
        setLoading(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              focusRef={focusRef}
              type='email'
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type={seenPassword ? 'text' : 'password'}
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* <p
              style={{
                margin: '-10px 0 16px',
                cursor: 'pointer',
                color: '#000',
                background: '#fff',
                padding: '8px 16px',
                alignSelf: 'flex-start',
                userSelect: 'none',
                borderRadius: '3px',
              }}
              onClick={() => setSeenPassword(!seenPassword)}>
              {seenPassword ? 'unsee password' : 'see password'}
            </p> */}
            <Form.Submit onClick={() => setLoading(true)} type='submit' disabled={isInvalid}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
            </Form.Text>
            <Form.SmallText>This page is protected by Google reCAPTCHA.</Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
