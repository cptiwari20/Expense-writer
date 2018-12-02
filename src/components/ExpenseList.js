import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h3>Expenses</h3>
    {props.expenses.length}
  </div>
);

const mapStateToProps = ({expenses}) => {
  return {expenses}
}

export default connect(mapStateToProps)(ExpenseList);