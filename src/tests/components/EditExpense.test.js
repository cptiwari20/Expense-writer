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
  wrapper = shallow(<EditExpense editExpense={editExpense} history={history} />)
});

describe('Edit Expense', () => {
  it('should show the Edit Expense Page Correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})