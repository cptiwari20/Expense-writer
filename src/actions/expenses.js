import uuid from 'uuid';

// add expense action Creator
export const addExpense = ({
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
export const deleteExpense =(id) => {
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