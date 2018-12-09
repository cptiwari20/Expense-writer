import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpenseList }from '../../components/expense/ExpenseList';

describe('Expense List', () => {
  it('should render Expense list', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
  })
})