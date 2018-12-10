import React, { Component } from 'react';
import ExpenseList from './expense/ExpenseList';
import ExpensesSummary from './expense/ExpensesSummary';

class Dashboard extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to the Dashboard</h2>
        <ExpensesSummary />
        <ExpenseList />
      </div>
    )
  }
}
export default Dashboard;