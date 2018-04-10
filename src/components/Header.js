import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export function Header({ startLogout }) {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink activeClassName={'is-active'} to='/dashboard'>Dashboard</NavLink>
      <NavLink activeClassName={'is-active'} to='/create'>Add Expense</NavLink>
      <NavLink activeClassName={'is-active'} to='/help'>Help</NavLink>
      <button onClick={startLogout}> Logout </button>
    </header>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    startLogout() {
      startLogout()(dispatch);
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header);