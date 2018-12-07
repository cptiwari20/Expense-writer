import React, { Component } from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {filterByText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

class NameFilterInput extends Component{

  state = { focusedInput: null }

  handleDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate))
  }
  render(){
    const {dispatch, filters} = this.props
    return (
      <div>
        <input 
          type='text'
          value={filters.text}
          onChange={ e => dispatch(filterByText(e.target.value)) }
        />
        <select 
          value={filters.sortBy}
          onChange={ e=> dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())}
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

export default connect(mapStateToProps)(NameFilterInput)