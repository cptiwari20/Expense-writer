import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'
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
  beforeEach(() => wrapper = shallow(<ExpenseForm />));

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

  it('should add an Amount having valid input', () => {
    const value = '10.25';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
  });

  it('should not add an invalid input for amount', () => {
    const value = '10.255';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
  });

  it('should set New Date onDateChange', () => {
    const now = moment(); //it is already mocked
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
  });

  it('should change focus onFocusChange', () => {
    const focused = true;
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
  })


});

describe('On Submit Handler', () => {
  it('should call handleSubmit prop for valid input', () => {
    const onSubmitSpy = jest.fn() // the fake func
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/> );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    let { description, amount, createdAt, note} = expenses[0];
    expect(onSubmitSpy).toHaveBeenLastCalledWith({ description, amount, createdAt, note })
  });
})

