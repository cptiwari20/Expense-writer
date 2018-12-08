import { addExpense, editExpense, deleteExpense } from '../../actions/expenses';

describe('Expense ACTIONS', () => {
  it('should return an action Type "DELETE_EXPENSE" ', () => {
    const id = '123xyz'
    const action = deleteExpense(id);
    expect(action).toEqual({
      type: 'DELETE_EXPENSE',
      id
    })
  });

  it('should return an action Type "EDIT_EXPENSE"', () => {
    const expense = { description: 'Reacharge', note: 'This is a test expense', amount: 1000, createdAt: 1213456}
    const id = '123abc'
    const action = editExpense(id, expense);
    expect(action.payload).toEqual({ id, updates: expense});
    expect(action.type).toBe('EDIT_EXPENSE');
  })

  it('should return an action Type "ADD_EXPENSE"', () => {
    const expense = { description: 'Reacharge', note: 'This is a test expense', amount: 1000, createdAt: 1213456}
    const action = addExpense(expense);
    expect(action.payload).toEqual({ id: expect.any(String), ...expense});
    expect(action.type).toBe('ADD_EXPENSE');
  });

  it('should return an action with default value with addExpense', () => {
    const action = addExpense();
    expect(action.type).toBe('ADD_EXPENSE');
    expect(action.payload).toEqual({id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0})
  })

})