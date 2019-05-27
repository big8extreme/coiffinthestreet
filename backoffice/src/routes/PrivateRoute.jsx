import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, isAdmin = false, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAdmin === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);