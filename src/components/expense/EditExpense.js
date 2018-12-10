import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, deleteExpense } from '../../actions/expenses';

export class EditExpense extends Component {
  onSubmit = (updates) => {
    this.props.editExpense(this.props.expense.id, updates);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.deleteExpense(this.props.expense.id);
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <h2>Edit your Expense</h2>
        <ExpenseForm 
            expense={this.props.expense}
            onSubmit = { this.onSubmit }  />
        <button onClick={this.onRemove}>Remove Expense</button>
      </div>
    )
  }
}
const mapStateToProps = ({expenses}, ownProps) => {
  return {
    expense: expenses.find(expense => expense.id === ownProps.match.params.id)
  }
}
export default connect(mapStateToProps, {editExpense, deleteExpense})(EditExpense);