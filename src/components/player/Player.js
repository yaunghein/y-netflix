import { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Close, Button } from './player-styles';

const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <PlayerContext.Provider value={{ playerOpen, setPlayerOpen }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { playerOpen, setPlayerOpen } = useContext(PlayerContext);
  return (
    playerOpen &&
    ReactDOM.createPortal(
      <Overlay onClick={() => setPlayerOpen(false)} {...restProps}>
        <Inner>
          <video id='y-netflix-player' controls>
            <source src='./videos/bunny.mp4' type='video/mp4' />
          </video>
          <Close onClick={() => setPlayerOpen(false)} />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { playerOpen, setPlayerOpen } = useContext(PlayerContext);
  return (
    <Button onClick={() => setPlayerOpen(!playerOpen)} {...restProps}>
      Play
    </Button>
  );
};
