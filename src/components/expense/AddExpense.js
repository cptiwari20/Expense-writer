import React, { Component } from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../actions/expenses';

export class AddExpense extends Component {
  onSubmit= (expense) => {
      this.props.addExpense(expense);
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
export default connect(null, { addExpense })(AddExpense);