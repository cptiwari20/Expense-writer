import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import moment from 'moment';


const store = configureStore();
import {addExpense} from './actions/expenses';
store.dispatch(addExpense({description: 'Roommate', amount: 4000, note:'this is my second expense', createdAt: moment()}))
store.dispatch(addExpense({description: 'mouse', amount: 350, note:'this is my second expense', createdAt: moment()}))
store.dispatch(addExpense({description: 'reacharge', amount: 100, note:'this is my second expense', createdAt: moment()}))

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>, document.querySelector('#app'));
