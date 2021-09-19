import { useState, useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SignUpContext } from '../context/signup';

const SignUp = () => {
  const { email } = useContext(SignUpContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState(email || '');
  const [password, setPassword] = useState('');
  const [seenPassword, setSeenPassword] = useState(false);
  const [error, setError] = useState('');
  const focusRef = useRef(null);

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = firstName === '' || emailAddress === '' || password === '';

  const handleSignUp = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => history.push(ROUTES.BROWSE));
      })
      .catch(error => setError(error.message));
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.InputControl>
              <Form.Input
                focusRef={focusRef}
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            </Form.InputControl>
            <Form.InputControl>
              <Form.Input
                type='email'
                placeholder='Email Address'
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
            </Form.InputControl>
            <Form.InputControl>
              <Form.Input
                type={seenPassword ? 'text' : 'password'}
                placeholder='Password'
                autoComplete='off'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.SeenIcon
                src='./images/icons/seen-icon.svg'
                onClick={() => setSeenPassword(!seenPassword)}
                seenPassword={seenPassword}
              />
            </Form.InputControl>
            <Form.Submit type='submit' disabled={isInvalid}>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to='/signin'>Sign in.</Form.Link>
            </Form.Text>
            <Form.SmallText>This page is protected by Google reCAPTCHA.</Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
