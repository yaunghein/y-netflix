import { Header, Profile } from '../components';
import * as ROUTES from '../constants/routes';

const SelectProfileContainer = ({ users, setProfile, setLoading }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src='./images/misc/logo.svg' alt='Netflix' />
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          {users.map(user => (
            <Profile.User
              key={user.userId}
              onClick={() => {
                setLoading(true);
                setProfile({
                  id: user.userId,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                });
              }}>
              <Profile.Picture src={user.photoURL} />
              <Profile.Name>{user.displayName}</Profile.Name>
            </Profile.User>
          ))}
        </Profile.List>
      </Profile>
    </>
  );
};

export default SelectProfileContainer;
