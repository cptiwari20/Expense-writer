import { addExpense, editExpense, deleteExpense } from '../../actions/expenses';

describe('Expense ACTIONS', () => {
  it('should return and action Type "DELETE_EXPENSE" ', () => {
    const id = '123xyz'
    const action = deleteExpense(id);
    expect(action).toEqual({
      type: 'DELETE_EXPENSE',
      id
    })
  })
})