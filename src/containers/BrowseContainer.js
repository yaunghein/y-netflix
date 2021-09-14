import { useState, useEffect, useContext } from 'react';
import SelectProfileContainer from './SelectProfileContainer';
import FooterContainer from './FooterContainer';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: 'Yaung Hein',
    photoURL: '1',
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [user]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src='./images/misc/logo.svg' alt='Netflix' />
            <Header.Link active={category === 'series' ? true : false} onClick={() => setCategory('series')}>
              Series
            </Header.Link>
            <Header.Link active={category === 'films' ? true : false} onClick={() => setCategory('films')}>
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>Sign out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play Now</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
