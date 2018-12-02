import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../../selectors/visibleExpenses';

const ExpenseList = (props) => (
  <div>
    <h3>Expenses</h3>
    <table border="1">
    <tbody>
    {props.expenses.map((expense, i) =>(
      <ExpenseListItem key={i} {...expense} />
    ))}
    </tbody>
    </table>
  </div>
);

const mapStateToProps = ({expenses, filters}) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);