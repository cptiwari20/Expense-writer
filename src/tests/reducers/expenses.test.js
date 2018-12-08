import expenseReducer from "../../reducers/expenses";

describe('EXPENSE REDUCERS', () => {
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
  })
})