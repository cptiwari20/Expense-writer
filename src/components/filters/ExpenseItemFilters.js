import React, { Component } from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {filterByText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

export class ExpenseItemFilters extends Component{

  state = { focusedInput: null }

  handleDateChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onTextInputChange = e =>{
    this.props.filterByText(e.target.value);
  }

  onSelectOptionChange = e => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
  }

  render(){
    const {dispatch, filters} = this.props
    return (
      <div>
        <input 
          type='text'
          value={filters.text}
          onChange={ this.onTextInputChange }
        />
        <select 
          value={filters.sortBy}
          onChange={ this.onSelectOptionChange }
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>

        <DateRangePicker
            startDate={filters.startDate}
            startDateId="month 1"
            endDate={filters.endDate}
            endDateId="month 30"
            onDatesChange={this.handleDateChange} 
            focusedInput={this.state.focusedInput} 
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
      </div>
    );
  }
}
const mapStateToProps = ({filters}) => {
  return {
    filters
  }
}

export default connect(mapStateToProps, {filterByText, sortByDate, sortByAmount, setStartDate, setEndDate })(ExpenseItemFilters)