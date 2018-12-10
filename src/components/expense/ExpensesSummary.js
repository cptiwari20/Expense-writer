import React, { Component } from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../../selectors/visibleExpenses';
import getExpensesTotal from '../../selectors/getExpensesTotal';

export class ExpenseSummary extends Component {

  visibleExpenses = () => this.props.expenses.length;

  expensesTotal = () => 
  getExpensesTotal(this.props.expenses);

  render(){
    return (
      <div>
        <h2>Showing {this.visibleExpenses()} expense(s), totalling {this.expensesTotal() / 100} Rupees.
        </h2>
      </div>
    )
  }
};

const mapStateToProps = ({expenses, filters}) => ( { expenses: getVisibleExpenses(expenses, filters) })

export default connect(mapStateToProps)(ExpenseSummary);