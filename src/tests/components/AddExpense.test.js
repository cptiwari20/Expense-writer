import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense }from '../../components/expense/AddExpense';
import ExpenseForm from '../../components/expense/ExpenseForm';
import expenses from '../fixtures/expenses';

let wrapper, addExpense, history;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />)
});

describe('Add Expense', () => {
  it('should show the Add Expense Page Correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle addExpense', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
  })

})