import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  margin: 0 20px;
  z-index: 2000;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  background-color: rgba(0, 0, 0, 0.8);
  border: 0;
  border-radius: 100vw;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15.5px;
    top: 5px;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border: none;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;
