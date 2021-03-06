import {
  Container,
  Base,
  Title,
  Text,
  SmallText,
  Link,
  Error,
  SeenIcon,
  InputControl,
  Input,
  Submit,
} from './form-styles';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.InputControl = function FormInputControl({ children, ...restProps }) {
  return <InputControl {...restProps}>{children}</InputControl>;
};

Form.SeenIcon = function FormSeenIcon({ ...restProps }) {
  return <SeenIcon {...restProps} />;
};

Form.Input = function FormInput({ focusRef, children, ...restProps }) {
  return (
    <Input ref={focusRef} {...restProps}>
      {children}
    </Input>
  );
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
