import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSignOut } from '../actions/auth';

export const Header = (props) => (
  <nav>
    <h1>Expense Writer</h1>
    <ul>
      <li>
        <NavLink to='/'  activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        exact={true}>
        Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/add-expense'  activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        Create
        </NavLink>
      </li>
      <li>
        <NavLink to='/about'  activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        About
        </NavLink>
      </li>
      <li>
        <button onClick={props.startSignOut}>Log Out</button>
      </li>
    </ul>
  </nav>
);

export default connect(null, { startSignOut })(Header);