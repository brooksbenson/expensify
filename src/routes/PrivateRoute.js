import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export function PrivateRoute(props) {
  const { isAuthenticated, component: Component, ...rest } = props;

  function giveComponent(props) {
    return isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to='/' />
    )
  };

  return <Route {...rest} component={giveComponent} />
};

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: !!auth.uid
  };
}

export default connect(mapStateToProps)(PrivateRoute);