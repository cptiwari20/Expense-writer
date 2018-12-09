import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import { ExpenseItemFilters } from '../../components/filters/ExpenseItemFilters';
import { filters, altFilters } from '../fixtures/filters'

let wrapper, filterByText, sortByDate, sortByAmount, setStartDate, setEndDate;
beforeEach(() => {
  filterByText= jest.fn();
  sortByDate= jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();


  wrapper = shallow(
    <ExpenseItemFilters 
      filterByText={filterByText}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount} 
      setStartDate={setStartDate} 
      setEndDate={setEndDate}
      filters={filters}
    />
    )
});

describe('Expense List Item Filters', () => {
  it('should show the Expense Item Filters Component Correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the Expense Item Filters Component with altFilters', () => {
    wrapper.setState({
      filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should filter items by text', () => {
    const text = 'pe'
    wrapper.find('input').simulate('change', {
      target: { value: text}
    });
    expect(filterByText).toHaveBeenLastCalledWith(text);
  });

  it('should add sort by date', () => {
    wrapper.find('select').simulate('change', {
      target: { value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
  })

  it('should add sort by date', () => {
    wrapper.find('select').simulate('change', {
      target: { value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
  });

  it('should sort by amount when there is no value', () => {
    wrapper.find('select').simulate('change', {
      target: { value: ''}
    });
    expect(sortByAmount).toHaveBeenCalled();
  });

  it('should add Start date and end date', () => {
    wrapper.find(DateRangePicker).prop('onDatesChange')(altFilters);
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
  });

  it('should handle the onFocusChange', () => {
    expect(wrapper.state('focusedInput')).toBe(null)
    const focusedInput = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(focusedInput);
    expect(wrapper.state('focusedInput')).toBe(focusedInput)
  })


})