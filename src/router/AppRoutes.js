import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from "../components/Dashboard";
import ErrorPage from "../components/ErrorPage";
import AddExpense from '../components/expense/AddExpense';
import About from "../components/About";
import EditExpense from '../components/expense/EditExpense';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRoutes = () => (
  <Router history={history}>
  <div>
      <Switch>
        <PrivateRoute path='/edit/:id' component={EditExpense} />
        <PrivateRoute path='/add-expense' component={AddExpense} />
        <PrivateRoute path='/dashboard' component={Dashboard} exact/>
        <PrivateRoute path="/about" component={About} />
        <PublicRoute path="/" component={LoginPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRoutes;