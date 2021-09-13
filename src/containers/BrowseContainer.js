import { useState } from 'react';
import SelectProfileContainer from './SelectProfileContainer';
import FooterContainer from './FooterContainer';

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: 'Yaung Hein',
    photoURL: '1',
  };

  return profile.displayName ? (
    <>
      <h1>Browse Container</h1>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
