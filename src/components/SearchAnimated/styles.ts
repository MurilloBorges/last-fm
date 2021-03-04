import styled from 'styled-components';

import colors from '../../styles/colors';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
  padding-left: 30px;
`;

interface InputContainerProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  padding?: string;
  position?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  align-items: center;
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  margin-right: 5px;
  max-width: 480px;
  padding: ${props => (props.padding ? props.padding : '0 0 0 10px')};
  position: ${props => (props.position ? props.position : 'relative')};
  width: 100%;
`;

interface InputProps {
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  height?: string;
  margin?: string;
  padding?: string;
  position?: string;
  fontSize?: string;
  textTransform?: string;
  colorDisabled?: string;
}

export const Input = styled.input<InputProps>`
  border: none;
  border-bottom: ${props =>
    props.border ? props.border : '1px solid rgba(0, 0, 0, 0.2)'};
  border-left: none;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px')};
  color: ${props => (props.color ? props.color : colors.primary)};
  height: ${props => (props.height ? props.height : '46px')};
  margin: ${props => (props.margin ? props.margin : '0')};
  max-width: 480px;
  padding: ${props => (props.padding ? props.padding : '0 0 0 10px')};
  position: ${props => (props.position ? props.position : 'relative')};
  width: 100%;

  ${props => (props.fontSize ? `font-size: ${props.fontSize}` : null)};

  ${props =>
    props.textTransform ? `text-transform: ${props.textTransform}` : null};

  &.disabledInput[readOnly] {
    background: transparent;
    border: 0;
    border-bottom: 1px solid ${colors.secondary};
    border-radius: 0;
    color: ${props =>
      props.colorDisabled ? props.colorDisabled : colors.dark};
    height: 40px;
  }
  :focus {
    border-color: transparent;
  }

  &.error {
    border-color: ${colors.danger};
  }

  ::-webkit-input-placeholder {
    color: ${colors.primary};
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    height: 35px;
    margin: 0;
    ::-webkit-input-placeholder {
      font-size: 1.1rem;
    }
  }
`;
