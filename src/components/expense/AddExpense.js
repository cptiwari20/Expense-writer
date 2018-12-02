import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';

class AddExpense extends Component{
  render(){
    return(
      <div>
        <h2>Add Your New Expense.</h2>
        <ExpenseForm />
        </div>
    )
  }
}
export default AddExpense;