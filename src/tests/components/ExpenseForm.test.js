import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expense/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('Expense Form', () => {  
  it('should correctly render ExpenseForm without any value', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render ExpenseForm with some value', () => {
    const wrapper = shallow(<ExpenseForm expense={ expenses[1] } />)
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Expense Form Handlers', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ExpenseForm />))

  it('should show an error while submitting the empty form', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
  })
})

