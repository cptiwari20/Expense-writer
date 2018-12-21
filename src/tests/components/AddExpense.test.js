import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense }from '../../components/expense/AddExpense';
import ExpenseForm from '../../components/expense/ExpenseForm';
import expenses from '../fixtures/expenses';

let wrapper, startAddExpense, history;
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history} />)
});

describe('Add Expense', () => {
  it('should show the Add Expense Page Correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle addExpense', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
  })

})