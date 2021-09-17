import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

const FaqsContainer = ({ email, setEmail }) => {
  const history = useHistory();

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map(({ id, header, body }) => (
          <Accordion.Item key={id}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

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
    </Accordion>
  );
};

export default FaqsContainer;
