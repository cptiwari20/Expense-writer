import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense }from '../../components/expense/AddExpense';

let wrapper, onSubmit, history;
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />)
});

describe('Add Expense', () => {
  it('should show the Add Expense Page Correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})