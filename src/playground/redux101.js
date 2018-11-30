import { createStore} from 'redux';

const store = createStore((state = { count: 1}, action) => {
  switch (action.type){
    case 'INCREMENT':
      const val = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return { count: state.count + val };
    case 'DECREMENT':
      return { anything: state.count - 1 };
    case 'RESET':
      return { count: 1 };
    default:
      return state;
  }
})


// actions 

const unsubscribe = store.subscribe(() => {
  return console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT'

});
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 10
});

// unsubscribe the store by running the value out of store as a function
// unsubscribe();

store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: "RESET"
});

// gettting the store value
// console.log(store.getState());
