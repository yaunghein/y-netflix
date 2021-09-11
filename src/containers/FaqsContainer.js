import { Accordion, Form } from '../components';
import faqsData from '../fixtures/faqs.json';

const FaqsContainer = () => {
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

      <Form>
        <Form.Input placeholder='Email Address' />
        <Form.Button>Try it now</Form.Button>
        <Form.Text>Ready to watch? Enter your email to create or restart your membership.</Form.Text>
      </Form>
    </Accordion>
  );
};

export default FaqsContainer;
