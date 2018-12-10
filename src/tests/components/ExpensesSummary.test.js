import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

import { ExpenseSummary } from '../../components/expense/ExpensesSummary';

describe('Expenses Summary', () => {
  it('should render a Expenses Summary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary  expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Expenses Summary with no expense', () => {
    const wrapper = shallow(<ExpenseSummary  expenses={[]} />)
    expect(wrapper).toMatchSnapshot();
  });
});