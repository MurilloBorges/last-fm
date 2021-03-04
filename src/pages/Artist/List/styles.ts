import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Title = styled.h1`
  color: ${colors.darker};
  font-size: 48px;
  padding: 50px 0;
  text-align: center;
`;

export const Card = styled.div`
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex: 0 0 225px;
  flex-direction: column;
  flex-flow: column wrap;
  height: 250px;
  justify-content: space-between;
  margin: 0 0 15px 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  & + a {
    margin: 0 0 15px 15px;
  }

  @media only screen and (max-width: 767px) {
    flex: 0 0 260px;

    & + a {
      margin: 0 0 20px 0;
    }

    &:hover {
      transform: scale(1);
    }
  }
`;

export const GridList = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;

  @media screen and (max-width: 1439px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 1239px) {
    max-height: 85%;
  }
  @media screen and (max-width: 768px) {
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-gap: 15px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ArtistName = styled.h1`
  color: ${colors.darker};
  font-size: 16px;
  padding: 10px 5px 0;
  text-align: center;
`;

export const ArtistImage = styled.img`
  width: 160px;
`;

interface ItemProps {
  color?: string;
  fontWeight?: string;
}

export const Item = styled.li<ItemProps>`
  align-items: center;
  color: ${props => (props.color ? props.color : colors.light)};
  display: flex;
  font-size: 1.2em;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  justify-content: center;
  letter-spacing: 0.5px;
  margin: 8px 0 0;
  width: 100%;
  @media only screen and (max-width: 767px) {
    font-size: 1em;
  }
`;
