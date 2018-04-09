import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import store from './store/store';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, appRoot);

startSetExpenses()(store.dispatch).then(() => {
  ReactDOM.render((
    <Provider store={store}>
      <AppRouter/>
    </Provider>), 
    document.getElementById('app')
  );
});