import getExpenseTotal from '../../selectors/getExpensesTotal';
import expenses from '../fixtures/expenses'

describe('Selector Get Sum of all Expenses', () => {
  it('should return the total', () => {
    expect(getExpenseTotal(expenses)).toBe(3500)
  });
  
  it('should return the total of only two expenses', () => {
    expect(getExpenseTotal([expenses[0], expenses[1] ])).toBe(1500)
  });

  it('should return 0 with no argument', () => {
    expect(getExpenseTotal()).toBe(0)
  })

  it('should return 0 with no expenses', () => {
    expect(getExpenseTotal([])).toBe(0)
  })
})
