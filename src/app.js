import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import store from './store/store';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';

store.dispatch(addExpense({amount: 1000, description: 'Car wash'}));
store.dispatch(addExpense({amount: 2000, description: 'Dinner for 2'}));
store.dispatch(addExpense({amount: 500, description: 'Coffee + Scone'}));

ReactDOM.render((
  <Provider store={store}>
    <AppRouter/>
  </Provider>), 
  document.getElementById('app')
);