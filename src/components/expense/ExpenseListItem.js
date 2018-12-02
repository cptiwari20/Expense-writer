import React from 'react';

const ExpenseListItem = ({description, amount, note, createdAt}) => (
  <tr>
    <td><h2>{description}</h2></td>
    <td><h3>{amount}</h3></td>
    <td><p>{note}</p></td>
    <td><span>{createdAt}</span></td>
  </tr>
);

export default ExpenseListItem;