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

// const expenses =
// {
//   description: 'Mobile',
//   amount: '510510',
//   createdAt: '12535434561',
//   note: 'This is an expense'
// }

// db.ref('expenses').push(expenses)

db.ref('expenses').on('child_added', (snapshot) => {
  console.log('ChildAdded!!!', snapshot.val());
})

// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       console.log(childSnapshot.val())
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })
//   .catch(e => console.log(e))


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>, document.querySelector('#app'));
