import styled from 'styled-components';

import colors from '../../styles/colors';

export const AuthContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1em 0 8rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    flex-flow: row wrap-reverse;
    padding: 0 0 2rem;
  }
`;

export const SignUpContent = styled.div`
  border: 1px solid ${colors.light};
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column wrap;
  padding: 35px;
  width: 47%;

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const AuthOptions = styled.div`
  align-items: center;
  color: ${colors.light};
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  justify-content: center;
  width: 6%;

  @media only screen and (max-width: 1024px) {
    margin: 30px auto;
    max-width: 500px;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const SignInContent = styled.div`
  border: 1px solid ${colors.light};
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column wrap;
  padding: 35px;
  width: 47%;

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const AuthForm = styled.form`
  padding: 15px 0;
`;

export const AuthButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 25px 0 0;

  @media only screen and (max-width: 768px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`;
