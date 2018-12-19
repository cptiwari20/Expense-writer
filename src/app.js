import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
const store = configureStore();
import firebase from 'firebase'
const db = firebase.database();

const expenses =
{
  description: 'Laptop',
  amount: '3000000',
  createdAt: '12535434561',
  note: 'This is an expense'
}

db.ref('expenses').push(expenses)


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>, document.querySelector('#app'));
