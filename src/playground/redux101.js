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
console.log(store.getState());


// actions 


store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: "RESET"
});

// gettting the store value
console.log(store.getState());
