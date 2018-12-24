import React, { Component } from 'react';
import ExpenseList from './expense/ExpenseList';
import ExpensesSummary from './expense/ExpensesSummary';

class Dashboard extends Component{
  render(){
    return(
      <div>
        <ExpensesSummary />
        <ExpenseList />
      </div>
    )
  }
}
export default Dashboard;