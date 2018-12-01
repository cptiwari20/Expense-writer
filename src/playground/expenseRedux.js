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

// add expense action Creator
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
// filters actions
const sortByText = (text) => {
  return {
    type: 'SORT_BY_TEXT',
    text
  }
}
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}
const sortByStartDate = (fromDate) => {
  return {
    type: 'SORT_BY_START_DATE',
    startDate: fromDate
  }
}
const sortByEndDate = (toDate) => {
  return {
    type: 'SORT_BY_END_DATE',
    endDate: toDate
  }
}


// reducers
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

// filter reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = ( state = filterReducerDefaultState, action) =>{
  switch (action.type){
    case 'SORT_BY_TEXT':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE': 
      return {... state, sortBy: 'date'};
    case 'SORT_BY_AMOUNT': 
      return {... state, sortBy: 'amount'};
    case 'SORT_BY_START_DATE': 
      return {... state, startDate: action.startDate};
    case 'SORT_BY_END_DATE': 
      return {... state, endDate: action.endDate};
    default:
      return state;
  }
};

// Redux Store
const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filterReducer 
}));

// subscribe
const unsubscribe = store.subscribe(() => {
  return console.log(store.getState())
})

// dispatch an action
// const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 20, note:'this is my first expense'}));
// const expenseTwo = store.dispatch(addExpense({description: 'Clothes', amount: 2000, note:'this is my second expense'}));

// store.dispatch(deleteExpense(expenseOne.payload.id));

// console.log(store.getState())

store.dispatch(sortByText('RENT'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(sortByStartDate(2015));
store.dispatch(sortByEndDate(2018));
