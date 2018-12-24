import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleExpenses from '../../selectors/visibleExpenses';
import getExpensesTotal from '../../selectors/getExpensesTotal';

export class ExpenseSummary extends Component {

  visibleExpenses = () => this.props.expenses.length;

  expensesTotal = () => 
  getExpensesTotal(this.props.expenses);

  render(){
    return (
      <div className='page-header'>
        <div className='content-container'>
            <h1 className='page-header__title'> 
              Showing <span>{this.visibleExpenses()}</span> expense(s), totalling <span>{this.expensesTotal() / 100}</span> Rupees.
            </h1>
            <div className="page-header__actions">
              <Link to='/add-expense' className='button'> 
                Create New Expense
              </Link>
            </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({expenses, filters}) => ( { expenses: getVisibleExpenses(expenses, filters) })

export default connect(mapStateToProps)(ExpenseSummary);