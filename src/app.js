import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import store from './store/store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';

store.dispatch(addExpense({amount: 1000, description: 'Car wash', createdAt: 1000}));
store.dispatch(addExpense({amount: 2000, description: 'Dinner for 2', createdAt: 1000000}));
store.dispatch(addExpense({amount: 500, description: 'Coffee + Scone', createdAt: 10000}));

ReactDOM.render((
  <Provider store={store}>
    <AppRouter/>
  </Provider>), 
  document.getElementById('app')
);