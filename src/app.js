import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  return console.log(visibleExpenses);
});
import {addExpense} from './actions/expenses';
import {sortByText} from './actions/filters';

store.dispatch(addExpense({description: 'Roommate', amount: 4000, note:'this is my second expense', createdAt: 2017}))
store.dispatch(addExpense({description: 'mouse', amount: 350, note:'this is my second expense', createdAt: 2016}))
store.dispatch(addExpense({description: 'reacharge', amount: 100, note:'this is my second expense', createdAt: 2019}))

store.dispatch(sortByText('roo'))

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>, document.querySelector('#app'));
