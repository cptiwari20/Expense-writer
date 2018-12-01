import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// const { createStore, combineReducers } = require('redux');
// const uuid = require('uuid');

// expense

const deleteExpense =(id) => {
  return {
    type: 'DELETE_EXPENSE',
    id
  }
}

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
const expenseReducer = ( state = [], action) =>{
  switch (action.type){
    case 'ADD_EXPENSE':
      return [ ...state, action.payload ];
    case 'DELETE_EXPENSE': 
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};
// Redux Store
const store = createStore(combineReducers({
  expenses: expenseReducer 
}))

// subscribe
const unsubscribe = store.subscribe(() => {
  return console.log(store.getState())
})

// dispatch an action
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 20, note:'this is my first expense'}));
const expenseTwo = store.dispatch(addExpense({description: 'Clothes', amount: 2000, note:'this is my second expense'}));

store.dispatch(deleteExpense(expenseOne.payload.id));

// console.log(store.getState())