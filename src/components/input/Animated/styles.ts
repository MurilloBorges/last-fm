import styled from 'styled-components';

import colors from '../../../styles/colors';

interface AuthFieldProps {
  margin?: string;
  width?: string;
}

export const AuthField = styled.div<AuthFieldProps>`
  align-items: center;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.light};
  display: flex;
  flex-flow: column wrap;
  height: 40px;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '15px 0 5px')};
  position: relative;
  transition: all 0.3s ease;
  width: ${props => (props.width ? props.width : 'initial')};

  &.error {
    border-bottom: 1px solid ${colors.danger};
  }

  @media screen and (max-width: 768px) {
    margin: 10px 0 5px;
  }
`;

export const AuthInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const IconContent = styled.div`
  color: ${colors.regular};
  margin: 20px 0 0 0;
  padding: 0 0 0 5px;

  &.error {
    color: ${colors.danger};
  }
`;

export const CustomLabel = styled.label`
  -webkit-transform-origin: top left;
  color: ${colors.regular};
  cursor: text;
  font-size: 14px;
  height: 20px;
  left: 30px;
  letter-spacing: 1px;
  line-height: 20px;
  max-width: calc(100% - 30px);
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  top: 20px;
  transform-origin: top left;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
  z-index: 0;

  &.active {
    transform: translateY(-15px) scale(0.75);
  }

  &.error {
    color: ${colors.danger};
  }
`;

interface CustomInputProps {
  textTransform?: string;
}

export const CustomInput = styled.input<CustomInputProps>`
  background-color: ${colors.transparent};
  border: 0;
  border-bottom: 0;
  border-radius: 0;
  color: ${colors.dark};
  height: 40px;
  margin: 13px 0 0;
  padding: 4px 0 12px 8px;
  transition: all 0.3s ease;
  width: calc(100% - 30px);

  ${props =>
    props.textTransform ? `text-transform: ${props.textTransform}` : null};

  &:focus {
    & + ${AuthField} {
      border-bottom-color: ${colors.darker};
    }
  }
`;
