import visibleExpenses from '../../selectors/visibleExpenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

describe('VISIBLE EXPENSES', () => {
  it('should show the expenses of filtered text', () => {
    const filters = {
      text: 'en',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const visibleExpense = visibleExpenses(expenses, filters); 
    expect(visibleExpense).toEqual([ expenses[1] ])
  });

  it('should show the expenses sort by start Date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(),
      endDate: undefined
    }; 
    const visibleExpense = visibleExpenses(expenses, filters); 
    expect(visibleExpense).toEqual([ expenses[0] ])
  });

  it('should show the expenses sort by end date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment()
    }; 
    const visibleExpense = visibleExpenses(expenses, filters); 
    expect(visibleExpense).toEqual([ expenses[1], expenses[2] ])
  });
 
  it('should show the expenses sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const visibleExpense = visibleExpenses(expenses, filters); 
    expect(visibleExpense).toEqual([ expenses[1], expenses[2], expenses[0] ])
  });

  it('should show the expenses sort by amount', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    }; 
    const visibleExpense = visibleExpenses(expenses, filters); 
    expect(visibleExpense).toEqual([  expenses[2], expenses[0], expenses[1] ])
  });
  
}) 