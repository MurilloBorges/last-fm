import React from 'react';

import { useSelector } from 'react-redux';

import { Redirect, Route, RouteProps } from 'react-router-dom';

import PropTypes from 'prop-types';

import { ApplicationState } from '../store';

interface PrivateRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  isLogged: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isLogged, ...rest } = props;
  const signed = useSelector(
    (state: ApplicationState) => state.auth.data.signed
  );

  if (signed === false && isLogged) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
};

PrivateRoute.defaultProps = {
  isLogged: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isLogged: PropTypes.bool,
};

export default PrivateRoute;
