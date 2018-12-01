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

const getVisibleExpenses = ( expenses, {text, endDate, startDate, sortBy} ) => {
  return expenses.filter((expense)=> {
    const startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate ;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = 
            !text || 
            expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch;
  })
  
}
// subscribe
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  return console.log(visibleExpenses);
})


// dispatch an action
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 20, note:'this is my first expense', createdAt: 2015}));
const expenseTwo = store.dispatch(addExpense({description: 'Clothes', amount: 2000, note:'this is my second expense', createdAt: 2008}))
store.dispatch(addExpense({description: 'Roommate', amount: 4000, note:'this is my second expense', createdAt: 2017}))
store.dispatch(addExpense({description: 'mouse', amount: 350, note:'this is my second expense', createdAt: 2016}))
store.dispatch(addExpense({description: 'reacharge', amount: 100, note:'this is my second expense', createdAt: 2019}))

// store.dispatch(deleteExpense(expenseOne.payload.id));

// console.log(store.getState())

// store.dispatch(sortByText('ren'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

store.dispatch(sortByStartDate(2016));
store.dispatch(sortByEndDate(2018));
