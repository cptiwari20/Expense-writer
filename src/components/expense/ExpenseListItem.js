import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenses';

const ExpenseListItem = ({dispatch, description, amount, note, createdAt, id}) => (
  <tr>
    <td><h2>{description}</h2></td>
    <td><h3>{amount}</h3></td>
    <td><p>{note}</p></td>
    <td><span>{createdAt}</span></td>
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