import { Container, Title, List, User, Picture, Name } from './profile-styles';

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profile.User = function ProfileUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profile.Picture = function ProfilePicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
