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
  });

  it('should add a description', () => {
    const text = 'New Test Description'
    wrapper.find('input').at(0).simulate('change', {
      target: {value: text}
    });
    expect(wrapper.state('description')).toBe(text);
  });

  it('should add a Note', () => {
    const text = 'New Test Note'
    wrapper.find('textarea').simulate('change', {
      target: {value: text}
    });
    expect(wrapper.state('note')).toBe(text);
  });

  it('should add an Amount', () => {
    const value = '10.25';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
  });
})

