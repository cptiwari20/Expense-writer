import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import ErrorPage from "../components/ErrorPage";
import AddExpense from '../components/expense/AddExpense';
import About from "../components/About";
import EditExpense from '../components/expense/EditExpense';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRoutes = () => (
  <Router history={history}>
  <div>
    <Header />
      <Switch>
        <Route path='/edit/:id' component={EditExpense} />
        <Route path="/about" component={About} />
        <Route path='/add-expense' component={AddExpense} />
        <Route path='/dashboard' component={Dashboard} exact/>
        <Route path="/" component={LoginPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRoutes;