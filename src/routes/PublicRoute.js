import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export function PublicRoute(props) {
  const { isAuthenticated, component: Component, ...rest } = props;

  function giveComponent(props) {
    return isAuthenticated ? (
      <Redirect to='/dashboard' />
    ) : (
      <Component {...props} />
    )
  };

  return <Route {...rest} component={giveComponent} />
};

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: !!auth.uid
  };
}

export default connect(mapStateToProps)(PublicRoute);