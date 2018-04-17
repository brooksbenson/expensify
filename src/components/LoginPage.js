import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export function LoginPage({ startLogin }) {
  return (
    <section className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'> Expensify </h1>
        <p> It's time to get your expenses under control </p>
        <button className='button' onClick={startLogin}>Login with Google</button>
      </div>
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