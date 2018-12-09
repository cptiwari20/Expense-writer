import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/expense/ExpenseListItem';
import expenses from '../fixtures/expenses'

describe('Expense List Item', () => {

  it('should return a list Item', () => {
    const wrapper = shallow(<ExpenseListItem props={expenses[1] }/>);
    expect(wrapper).toMatchSnapshot();
  })

})