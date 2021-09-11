import { Header, Form, Feature } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src='/images/misc/logo.svg' alt='Netflix' />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>

      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <Form>
          <Form.Input placeholder='Email Address' />
          <Form.Button>Try it now</Form.Button>
          <Form.Text>Ready to watch? Enter your email to create or restart your membership.</Form.Text>
        </Form>
      </Feature>
    </Header>
  );
}
