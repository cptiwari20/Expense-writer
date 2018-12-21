import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses'

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const JSX =
<Provider store={store}>
<AppRoutes />
</Provider>

ReactDOM.render(<p>Loading</p>, document.querySelector('#app'));

store.dispatch(startSetExpense())

ReactDOM.render(JSX, document.querySelector('#app'));
