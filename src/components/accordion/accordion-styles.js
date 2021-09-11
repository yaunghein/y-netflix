import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  width: 60vw;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Frame = styled.div`
  margin-bottom: 10px;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.h3`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 3px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  filter: brightness(0) invert(1);
  width: 30px;

  @media (max-width: 600px) {
    width: 18px;
  }
`;

export const Body = styled.p`
  width: 100%;
  box-sizing: border-box;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  margin-top: 0;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
