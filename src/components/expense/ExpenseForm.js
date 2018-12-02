import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

console.log(moment())
class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calenderFocused: false
  }
  onDateChange = ({ createdAt }) => (
    this.setState({ createdAt })
  )
  onFocusChange = ({ focused }) => {
    this.setState({ calenderFocused: focused})
  }
  render(){
    return (
      <form>
        <input 
          type='text'
          placeholder='Description'  
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
        />
      </form>
    )
  }
}

export default ExpenseForm;