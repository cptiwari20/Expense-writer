import db from '../firebase/firebase';

// add expense action Creator
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense
  }
};

export const startAddExpense = (expenseData = {} ) => dispatch => {
    const {
      description= '',
      note= '',
      amount= 0,
      createdAt=0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return db.ref('expenses').push(expense).then((ref) => {
       dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    }).catch(e => console.log('Not added to db', e))
    
};

export const deleteExpense = (id) => {
  return {
    type: 'DELETE_EXPENSE',
    id
  }
};

export const editExpense = (id, updates)=> {
  return {
    type: 'EDIT_EXPENSE',
    payload: {
      id, updates
    }
  }
};