import db from '../firebase/firebase';

// add expense action Creator
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense
  }
};

export const startAddExpense = (expenseData = {} ) => (dispatch, getState) => {
    const {
      description= '',
      note= '',
      amount= 0,
      createdAt=0
    } = expenseData;
  const uid = getState().auth.uid;

    const expense = { description, note, amount, createdAt };
    return db.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
       dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    }).catch(e => console.log('Not added to db', e))
    
};

export const deleteExpense = ({ id }) => {
  return {
    type: 'DELETE_EXPENSE',
    id
  }
};

export const startDeleteExpense = ({ id } = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
    dispatch(deleteExpense({ id }))
  })
}

export const editExpense = (id, updates)=> {
  return {
    type: 'EDIT_EXPENSE',
    payload: {
      id, updates
    }
  }
};

export const startEditExpense = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
    dispatch(editExpense(id, updates))
  })
}

// set expense'
export const setExpenses = (expenses) => (
  {
    type: 'SET_EXPENSES',
    payload: expenses
  }
);

export const startSetExpense = () => (dispatch, getState) =>  {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses`).once('value').then(snapshot => {
  const expenses = [];

    snapshot.forEach(childSnapshot => {
      expenses.push({ id: childSnapshot.key, ...childSnapshot.val() })      
    });
    dispatch(setExpenses(expenses));
  })
};