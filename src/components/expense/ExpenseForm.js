import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

console.log(moment())
class ExpenseForm extends Component {
  state = {
    description: '',
    amount: 0,
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
  onAmountChange = e => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
     return this.setState( { amount })
    }
  }

  handleSubmit = () => {
    return this.props.addExpense(this.state)
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          placeholder='Description'
          value={this.state.description}
          onChange={e => this.setState({description: e.target.value})}  
        />
        <input 
          type='number'
          placeholder='Amount'
          value={this.state.amount}
          onChange={this.onAmountChange}  
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea 
          placeholder='Note'
          value={this.state.note}
          onChange={e => this.setState({note: e.target.value})}  
        >
        </textarea>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default ExpenseForm;