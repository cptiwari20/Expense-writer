import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
  <div>
    <h3>Expenses</h3>
    <table>
    <tbody>
    {props.expenses.map((expense, i) =>(
      <ExpenseListItem key={i} {...expense} />
    ))}
    </tbody>
    </table>
  </div>
);

const mapStateToProps = ({expenses}) => {
  return {expenses}
}

export default connect(mapStateToProps)(ExpenseList);