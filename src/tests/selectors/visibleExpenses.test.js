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
    expect(visibleExpense).toEqual([ expenses[1]])
  })
}) 