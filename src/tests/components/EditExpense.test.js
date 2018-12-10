import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense }from '../../components/expense/EditExpense';
import ExpenseForm from '../../components/expense/ExpenseForm';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, deleteExpense, history;
beforeEach(() => {
  editExpense = jest.fn();
  deleteExpense = jest.fn()
  history = { push: jest.fn() };

  wrapper = shallow(
    <EditExpense 
      editExpense={editExpense}
      d 
      deleteExpense={deleteExpense}
      history={history} 
      expense={expenses[1]}
    />
    )
});

describe('Edit Expense', () => {
  it('should show the Edit ExpensePage Correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle Edit Expense onSubmit', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
  });

  it('should handle Delete Expense onRemove', () => {
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(deleteExpense).toHaveBeenLastCalledWith(expenses[1].id)
  })
})