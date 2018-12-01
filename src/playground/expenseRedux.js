// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';
const { createStore, combineReducers } = require('redux');
const uuid = require('uuid');



// expense

// add exxpense action Creator
const addExpense = ({
  description= '',
  note= '',
  amount= 0,
  createdAt=0
} = {})=> {
  return {
    type: 'ADD_EXPENSE',
    payload: {
      description, amount, note, createdAt, id: uuid()
    }
  }
};

// reducer
const addExpenseReducer = (state = {}, action) =>{
  switch (action.type){
    case 'ADD_EXPENSE':
      return { ...state, Expense: action.payload };
    default:
      return state;
  }
};
// Redux Store
const store = createStore(combineReducers({
  addExpense: addExpenseReducer 
}))

// subscribe
const unsubscribe = store.subscribe(() => {
  return console.log(store.getState())
})

// dispatch an action
store.dispatch(addExpense({description: 'Rent', amount: 20, note:'this is my first expense'}));
