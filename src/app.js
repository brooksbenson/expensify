import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routes/AppRouter';
import store from './store/store';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');
const appJsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, appRoot);

let hasRendered = false;
function renderApp() {
  if (!hasRendered) {
    ReactDOM.render(appJsx, appRoot);
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    startSetExpenses()(store.dispatch).then(() => {
      store.dispatch(login(user.uid));
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});