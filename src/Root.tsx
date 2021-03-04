import React from 'react';

import { RouteProps, BrowserRouter as Router } from 'react-router-dom';

import ComponentHeader from './components/Header';
import Routes from './routes';
import { MainContainer } from './styles/general';
import GlobalStyle from './styles/global';

const Root: React.FunctionComponent<RouteProps> = () => {
  return (
    <>
      <Router>
        <ComponentHeader />
        <MainContainer>
          <Routes />
        </MainContainer>
      </Router>

      <GlobalStyle />
    </>
  );
};

export default Root;
