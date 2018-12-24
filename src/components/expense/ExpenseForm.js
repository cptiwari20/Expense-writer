import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {
  constructor(props){
    super(props);
    const { expense } = props
    this.state = {
      description: expense ? expense.description : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      note: expense ? expense.note : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }  
  }
   
  onDateChange = (createdAt) => (
    this.setState({ createdAt })
  )
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused})
  }
  onAmountChange = e => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
     return this.setState( { amount })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      return this.setState({error: 'Please provide some description and amount!'})
    }
    this.setState({error: ''});
    let { description, createdAt, amount, note} = this.state
    this.props.onSubmit({
      description,
      createdAt: createdAt.valueOf(),
      amount: parseFloat(amount, 10) * 100,
      note
    });
  }
  render(){
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input 
          type='text'
          className='text-input'
          placeholder='Description'
          value={this.state.description}
          onChange={e => this.setState({description: e.target.value})}  
        />
        <input 
          className='text-input'
          type='number'
          placeholder='Amount'
          value={this.state.amount}
          onChange={this.onAmountChange}  
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea 
          className='text-area'
          placeholder='Note'
          value={this.state.note}
          onChange={e => this.setState({note: e.target.value})}  
        >
        </textarea>
        <button className='button' type='submit'>Submit</button>
      </form>
    )
  }
}

export default ExpenseForm;