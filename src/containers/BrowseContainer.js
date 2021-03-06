import { useState, useEffect, useContext } from 'react';
import SelectProfileContainer from './SelectProfileContainer';
import FooterContainer from './FooterContainer';
import { Header, Loading, Card, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import Fuse from 'fuse.js';
import { useAuthListener } from '../hooks';

const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('films');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const [slideRows, setSlideRows] = useState([]);
  const { user } = useAuthListener();
  const [owner, setOwner] = useState({});

  const users = [
    {
      userId: 1,
      displayName: owner?.displayName,
      photoURL: owner?.photoURL,
    },
    {
      userId: 2,
      displayName: owner?.displayName === 'Yaung Hein' ? 'May Htun' : `${owner?.displayName}'s Girlfriend`,
      photoURL: owner?.photoURL === '5' ? 1 : Number(owner?.photoURL) + 1,
    },
  ];

  useEffect(() => {
    setOwner(user);
  }, [user]);

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

  //effect to change cards based on search
  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 2 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
      <Header src='joker1' dontShowOnSmallViewPort noHeightOnMobile>
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
                  <Card.Image src={`./images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.Group flexDirection='row'>
                      <Card.Circle>
                        <Card.CircleIcon src='./images/icons/play-icon.svg' />
                      </Card.Circle>
                      <Card.Circle>
                        <Card.CircleIcon src='./images/icons/plus-icon.svg' />
                      </Card.Circle>
                      <Card.Circle>
                        <Card.CircleIcon src='./images/icons/thumb-up-icon.svg' />
                      </Card.Circle>
                      <Card.Circle>
                        <Card.CircleIcon src='./images/icons/thumb-down-icon.svg' />
                      </Card.Circle>

                      <Card.Circle>
                        <Card.CircleIcon
                          src='./images/icons/chevron-right.png'
                          style={{ transform: 'rotate(90deg)' }}
                        />
                      </Card.Circle>
                    </Card.Group>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Genre>&#8226; {item.genre.charAt(0).toUpperCase() + item.genre.slice(1)}</Card.Genre>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category} relatedData={slideItem.data}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
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
