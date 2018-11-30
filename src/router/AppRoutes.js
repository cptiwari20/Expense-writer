import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import ErrorPage from "../components/ErrorPage";
import AddExpense from '../components/AddExpense';
import About from "../components/About";

const AppRoutes = () => (
  <BrowserRouter>
  <div>
    <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path='/add-expense' component={AddExpense} />
        <Route path='/' component={Dashboard} exact/>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRoutes;