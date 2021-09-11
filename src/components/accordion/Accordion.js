import { useState, useContext, createContext } from 'react';
import { Container, Inner, Title, Frame, Item, Header, Icon, Body } from './accordion-styles';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(ToggleContext);

  return (
    <Header onClick={() => setIsOpen(!isOpen)} {...restProps}>
      {children}
      {isOpen ? (
        <Icon src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <Icon src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isOpen } = useContext(ToggleContext);
  return isOpen && <Body {...restProps}>{children}</Body>;
};
