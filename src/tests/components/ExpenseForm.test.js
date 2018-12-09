import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expense/ExpenseForm';
import expenses from '../fixtures/expenses';

it('should correctly render ExpenseForm without any value', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot();
})

it('should correctly render ExpenseForm with some value', () => {
  const wrapper = shallow(<ExpenseForm expense={ expenses[1] } />)
  expect(wrapper).toMatchSnapshot();
})

