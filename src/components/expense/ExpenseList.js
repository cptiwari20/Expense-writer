import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseItemFilters from '../filters/ExpenseItemFilters';
import getVisibleExpenses from '../../selectors/visibleExpenses';

export const ExpenseList = (props) => (
  <div>
    <ExpenseItemFilters />
    <div className='content-container'>
      <div className='list-header'>
        <div className="show-on-mobile">Expenses</div>
        <div className="show-on-desktop">Expense</div>
        <div className="show-on-desktop">Amount</div>    
      </div>
      <div className='list-body'>
      {
        props.expenses.length === 0 ? (
          <p className='list-item__message'>No Expese</p>
        ) : (
          props.expenses.map((expense, i) =>(
            <ExpenseListItem key={i} {...expense} />
          ))
        )
      }
      </div>
    </div>
  </div>
);

const mapStateToProps = ({expenses, filters}) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);