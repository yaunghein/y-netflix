import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: -100px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    /* z-index: 100; */
    margin-top: -56px;
    @media (max-width: 1100px) {
      margin-top: -150px;
    }
    @media (max-width: 600px) {
      margin-top: 64px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  user-select: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 9px;
  font-weight: 400;
  opacity: 0.75;
  color: white;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Genre = styled.p`
  margin: 8px 0 0 0;
  font-size: 9px;
  font-weight: 700;
  color: white;
  user-select: none;
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100vw;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: #181818;
  display: grid;
  place-items: center;
  margin-right: 4px;

  &:last-of-type {
    margin: 0 0 0 auto;
  }
`;

export const CircleIcon = styled.img`
  filter: brightness(0) invert(1);
  width: 9px;
  opacity: 0.75;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  scrollbar-width: none;

  @media (max-width: 600px) {
    overflow-x: scroll;
  }
`;

export const Meta = styled.div`
  visibility: hidden;
  opacity: 0;
  padding: 16px;
  background-color: #141414;
  transition: all 0.2s ease-out;
  border-radius: 0 0 4px 4px;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  border-radius: 4px 4px 4px 4px;
  transition: all 0.2s ease-out;
`;

export const Item = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transform: scale(1) translateY(0);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1);

  &:hover {
    transform: scale(1.5) translateY(-40px);
    z-index: 1000;
    transition-delay: 0.3s;

    @media (max-width: 600px) {
      transform: scale(1.1) translateY(0px);
    }
  }

  &:hover ${Meta} {
    visibility: unset;
    opacity: 1;
    display: block;
    z-index: 100;
    transition-delay: 0.3s;

    @media (max-width: 600px) {
      visibility: hiddden;
      opacity: 0;
    }
  }

  &:hover ${Image} {
    border-radius: 4px 4px 0 0;
    transition-delay: 0.3s;
  }

  &:first-of-type {
    margin-left: 56px;
    transform-origin: 0 50%;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;
    transform-origin: 100% 50%;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 800px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  background: #000 url(${({ src }) => src});
  scrollbar-width: none;
  background-size: cover;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  overflow-y: scroll;
  z-index: 1000;
  background-position-x: right;
  background-repeat: no-repeat;
  animation: grow 0.2s ease-out forwards;

  @keyframes grow {
    from {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const FeatureContent = styled.div`
  margin: 56px;
  /* width: 100%; */
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  padding: 8px 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;
