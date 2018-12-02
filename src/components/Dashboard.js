import React, { Component } from 'react';
import ExpenseList from './expense/ExpenseList';

class Dashboard extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to the Dashboard</h2>
        <ExpenseList />
      </div>
    )
  }
}
export default Dashboard;