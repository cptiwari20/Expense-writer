import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

class EditExpense extends Component {
  render(){
    console.log(this.props.expense)
    return(
      <div>
        <h2>Edit your Expense</h2>
        <ExpenseForm expense={this.props.expense}  />
      </div>
    )
  }
}
const mapStateToProps = ({expenses}, ownProps) => {
  return {
    expense: expenses.find(expense => expense.id === ownProps.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpense);