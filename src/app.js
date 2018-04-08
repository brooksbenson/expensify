import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import store from './store/store';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

ReactDOM.render((
  <Provider store={store}>
    <AppRouter/>
  </Provider>), 
  document.getElementById('app')
);