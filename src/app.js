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


// db.ref().set({
//   name: 'Cp Tiwari',
//   age: '24',
//   location: {
//     city: 'Jbp',
//     state: 'MP'
//   }
// });

// db.ref('location/state').set('Madhya Pradesh')
// db.ref().update({ name: 'Vikas Tiwari', "location/city": "Katni"}).then(() => {
//   console.log('Data Updates');
// }).catch(e => console.log(e));

const onVC = db.ref().on('value', (snapshot) => {
  let val = snapshot.val();
  console.log(val);
});

// setTimeout(()=> {
//   db.ref('age').set('22');
// }, 10000);
db.ref().off(onVC);



setTimeout(()=> {
  db.ref().update({'location/city': 'Barhi Madhya Pradesh'})
}, 11000)

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>, document.querySelector('#app'));
