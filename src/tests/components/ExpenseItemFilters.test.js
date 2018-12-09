import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseItemFilters } from '../../components/filters/ExpenseItemFilters';
import { filters, altFilters } from '../fixtures/filters'

let wrapper, filterByText, sortByDate, sortByAmount, setStartDate, setEndDate;
beforeEach(() => {
  filterByText= jest.fn();
  sortByDate, sortByAmount, setStartDate, setEndDate = jest.fn()

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
  })

})