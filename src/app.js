import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses'
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import { history } from './router/AppRoutes';

const store = configureStore();
const JSX =
  <Provider store={store}>
    <AppRoutes />
  </Provider>
 
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(JSX, document.querySelector('#app'));
    hasRendered = true;
  }
}
ReactDOM.render(<p>Loading</p>, document.querySelector('#app'));

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
    });
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
 })


