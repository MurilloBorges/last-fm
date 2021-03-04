import styled from 'styled-components';

import { HashLink } from 'react-router-hash-link';

import colors from '../../styles/colors';

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  height: 80px;
  width: 100%;
`;

interface NavItemsProps {
  maxWidth?: string;
  padding?: string;
}

export const NavItems = styled.ul<NavItemsProps>`
  background-color: ${colors.white};
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1220px')};
  padding: ${props => (props.padding ? props.padding : '32px 2em')};
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

interface ItemsProps {
  paddingRight?: string;
}

export const Items = styled.li<ItemsProps>`
  list-style: none;
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '20px')};
`;

interface LinkProps {
  color?: string;
  fontWeight?: string;
  height?: string;
  width?: string;
}

export const Link = styled(HashLink)<LinkProps>`
  align-items: center;
  border-bottom: 1px solid ${colors.transparent};
  color: ${props => (props.color ? props.color : colors.black)};
  cursor: pointer;
  display: flex;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  height: ${props => (props.height ? props.height : 'initial')};
  justify-content: center;
  letter-spacing: 1px;
  opacity: 0.5;
  padding: 0 0 3px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: ${props => (props.width ? props.width : 'initial')};

  @media only screen and (max-width: 1239px) {
    letter-spacing: 0.4px;
  }

  &.withoutHoverAfter {
    border: 0;

    &::after {
      height: 0;
    }
  }

  &::after {
    background-color: ${colors.black};
    bottom: -2px;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: auto;
    top: auto;
    transition: all 0.4s ease-in-out;
    width: 0;
  }

  &:hover,
  &:hover::after {
    opacity: 1;
    width: 100%;
  }

  &.active {
    opacity: 1;
    &::after {
      opacity: 1;
      width: 100%;
    }
  }
`;
