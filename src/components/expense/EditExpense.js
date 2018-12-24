import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startDeleteExpense } from '../../actions/expenses';

export class EditExpense extends Component {
  onSubmit = (updates) => {
    this.props.startEditExpense(this.props.expense.id, updates);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.startDeleteExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit your Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
              expense={this.props.expense}
              onSubmit = { this.onSubmit }  />
          <button className='button button--secondary' onClick={this.onRemove}>Remove Expense</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({expenses}, ownProps) => {
  return {
    expense: expenses.find(expense => expense.id === ownProps.match.params.id)
  }
}
export default connect(mapStateToProps, {startEditExpense, startDeleteExpense})(EditExpense);