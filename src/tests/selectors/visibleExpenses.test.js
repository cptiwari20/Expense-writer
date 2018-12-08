import visibleExpenses from '../../selectors/visibleExpenses';
import moment from 'moment';

const expenses = [ {
  id: '1',
  description: 'Mobile',
  note: '',
  createdAt: moment().add(1, 'year'),
  amount: 1000
},
{
  id: '2',
  description: 'Pen',
  note: '',
  createdAt: 0,
  amount: 500
},{
  id: '3',
  description: 'Headphone',
  note: '',
  createdAt: moment().subtract(1, 'month'),
  amount: 2000
}]

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