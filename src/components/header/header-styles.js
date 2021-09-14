import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background: url(${({ src }) => (src ? `./images/misc/${src}.jpg` : './images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    z-index: 1;
    background: rgb(255, 255, 255);
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  }

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Frame = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  z-index: 1;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  cursor: pointer;
  z-index: 1;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  z-index: 1;

  &:hover {
    background: #f40612;
  }
`;

export const Feature = styled(Frame)`
  padding: 210px 0 360px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  z-index: 1;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  font-size: 18px;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 150px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.4s ease-out;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active ? '10px' : '0')};
  padding: ${({ active }) => (active ? '0 10px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '200px' : '0px')};
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 125px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
    user-select: none;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  z-index: 1;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
