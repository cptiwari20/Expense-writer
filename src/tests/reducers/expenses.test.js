import expenseReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

describe('EXPENSE REDUCERS', () => {
  it('should return default state with unknown action type', () => {
    const action ={type: "$%KFALTU^&^7W"}
    const newState = expenseReducer([], action);
    expect(newState).toEqual([]);
  });

  it('should add an expense', () => {
    const expense = { description: 'rent', amount: 100};
    const action ={type: "ADD_EXPENSE", payload: expense}
    const newState = expenseReducer([], action);
    expect(newState).toEqual([expense]);
  });

  it('should delete an expense', () => {
    const expense = { id: '1', description: 'rent', amount: 100};
    const action ={type: "DELETE_EXPENSE", id: '1'}
    const newState = expenseReducer([expense], action);
    expect(newState).toEqual([]);
  });

  it('should edit an expense', () => {
    const expense = { id: '1', description: 'rent', amount: 100};
    const action = {
        type: "EDIT_EXPENSE",
        payload: {  
          id: '1', updates: { description: 'Rent Added'}
        } 
      }
    const newState = expenseReducer([expense], action);
    expect(newState).toEqual([{
       description: 'Rent Added',
       id: '1',
       amount: 100
      }
    ]);
  });

  it('should set expenses', () => {
    const action = { type: 'SET_EXPENSES', payload: [ expenses[0] ]}
    const newState = expenseReducer(expenses, action);

    expect(newState).toEqual([ expenses[0] ])
  })
})