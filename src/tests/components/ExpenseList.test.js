import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpenseList }from '../../components/expense/ExpenseList';

describe('Expense List', () => {
  it('should render a Expense list', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
  })

  it('should retrun no Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
});
