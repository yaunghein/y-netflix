import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FaqsContainer from '../containers/FaqsContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { OptForm, Feature } from '../components';
import { useContext } from 'react';
import { SignUpContext } from '../context/signup';

const Home = () => {
  const history = useHistory();
  const { email, setEmail } = useContext(SignUpContext);

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input
              type='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder='Email Address'
            />
            <OptForm.Button
              disabled={!email.length}
              onClick={() => {
                history.push(ROUTES.SIGN_UP);
              }}>
              Try it now
            </OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer email={email} setEmail={setEmail} />
      <FooterContainer />
    </>
  );
};

export default Home;
