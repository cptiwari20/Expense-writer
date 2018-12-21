import { addExpense, editExpense, deleteExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

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
    const expense = expenses[0]
    const id = '123abc'
    const action = editExpense(id, expense);
    expect(action.payload).toEqual({ id, updates: expense});
    expect(action.type).toBe('EDIT_EXPENSE');
  })

  it('should return an action Type "ADD_EXPENSE"', () => {
    const expense = expenses[0]
    const action = addExpense(expense);
    expect(action.payload).toEqual({ ...expense });
    expect(action.type).toBe('ADD_EXPENSE');
  });

})