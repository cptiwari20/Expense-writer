// import { createStore } from 'redux';
const createStore = require('redux').createStore; // for testing inside the node.

const increase = () => {
  return { type: 'INCREMENT' }
}
const increasedBy = num => {
  return { type: 'INCREMENT', incrementBy: num }
}
const decrement = () => {
  return { type: 'DECREMENT' }
}
const reset = () => {
  return { type: 'RESET' }
}
const store = createStore((state = { count: 0}, action) => {
  switch (action.type){
    case 'INCREMENT':
      const val = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return { count: state.count + val };
    case 'DECREMENT':
      return { anything: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
})


// actions 

const unsubscribe = store.subscribe(() => {
  return console.log(store.getState());
});

// store.dispatch(increase());
// store.dispatch(increasedBy(3));

// unsubscribe the store by running the value out of store as a function
// unsubscribe();

// store.dispatch({
//   type: 'DECREMENT'
// });
store.dispatch(reset());

// gettting the store value
// console.log(store.getState());
