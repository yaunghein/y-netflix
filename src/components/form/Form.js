import { Container, Input, Button, Text } from './form-styles';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = function FormButtob({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
  );
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
