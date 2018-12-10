import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenses';
import moment from 'moment';

export const ExpenseListItem = ({dispatch, description, amount, note, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
     <h2>{description}</h2>
    </Link>
    <h3>{amount}</h3>
    <p>{note}</p>
    <span>{moment(createdAt).format('Do MMM YYYY')}</span>
  </div>
);

export default connect()(ExpenseListItem);