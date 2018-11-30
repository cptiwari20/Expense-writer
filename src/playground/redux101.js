import { createStore} from 'redux';

const store = createStore((state = { count: 1}, action) => {
  switch (action.type){
    case 'INCREMENT':
      return { count: state.count + 1 };
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
  type: 'INCREMENT'
});

// unsubscribe the store by running the value out of store as a function
unsubscribe();

store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: "RESET"
});

// gettting the store value
// console.log(store.getState());
