import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenses';
import moment from 'moment';

export const ExpenseListItem = ({dispatch, description, amount, note, createdAt, id}) => (
  <tr>
    <td>
    <Link to={`/edit/${id}`}>
     <h2>{description}</h2>
    </Link>
    </td>
    <td><h3>{amount}</h3></td>
    <td><p>{note}</p></td>
    <td><span>{moment(createdAt).format('Do MMM YYYY')}</span></td>
    <td>
      <button onClick={e=> {
        dispatch(deleteExpense(id))
      }}>
      Remove
      </button>
    </td>
  </tr>
);

export default connect()(ExpenseListItem);