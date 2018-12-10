import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseItemFilters from '../filters/ExpenseItemFilters';
import getVisibleExpenses from '../../selectors/visibleExpenses';

export const ExpenseList = (props) => (
  <div>
    <h3>Expenses List</h3>
    <ExpenseItemFilters />
    {
      props.expenses.length === 0 ? (
        <p>No Expese</p>
      ) : (
        props.expenses.map((expense, i) =>(
          <ExpenseListItem key={i} {...expense} />
        ))
      )
    }
  </div>
);

const mapStateToProps = ({expenses, filters}) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);