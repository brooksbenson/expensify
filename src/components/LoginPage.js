import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export function LoginPage({ startLogin }) {
  return (
    <section>
      <h1> Login </h1>
      <button onClick={startLogin}> Login </button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    startLogin() {
      startLogin()(dispatch); 
    }
  }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);