import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from "redux-thunk";
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers ({
      expenses: expenseReducer,
      filters: filterReducer 
    }), 
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
  return store;
};
