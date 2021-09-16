import { useState, useEffect, useContext } from 'react';
import SelectProfileContainer from './SelectProfileContainer';
import FooterContainer from './FooterContainer';
import { Header, Loading, Card } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const [slideRows, setSlideRows] = useState([]);

  const users = [
    {
      userId: 1,
      displayName: 'Yaung Hein',
      photoURL: '1',
    },
    {
      userId: 2,
      displayName: 'May Htun',
      photoURL: '2',
    },
  ];

  //effect to fake loading state when going from select profile to browse
  //trigger when select profile component set loading state to true
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  //effect to change slides based on category
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
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
              <Header.Picture src={profile.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile.photoURL} />
                  <Header.Link>{profile.displayName}</Header.Link>
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

      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category} />
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer users={users} setProfile={setProfile} setLoading={setLoading} />
  );
};

export default BrowseContainer;
