import React, { Component } from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../../actions/expenses';

export class AddExpense extends Component {
  onSubmit= (expense) => {
      this.props.startAddExpense(expense);
      this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <h2>Add Your New Expense.</h2>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(null, { startAddExpense })(AddExpense);