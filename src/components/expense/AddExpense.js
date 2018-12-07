import React, { Component } from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../actions/expenses';

class AddExpense extends Component{
  render(){
    return(
      <div>
        <h2>Add Your New Expense.</h2>
        <ExpenseForm onSubmit={(expense) => console.log(expense)}/>
        </div>
    )
  }
}
export default connect(null, { addExpense })(AddExpense);