import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenses';
import moment from 'moment';

export const ExpenseListItem = ({dispatch, description, amount, note, createdAt, id}) => (
    <Link className='list-item' to={`/edit/${id}`}>
      <div>
        <h2 className='list-item__title'>{description}</h2>
        <span className='list-item__subtitle'>
          {moment(createdAt).format('Do MMM YYYY')}
        </span>
        <p className='list-item__subtitle'>{note}</p>
      </div>
      <h2 className='list-item__amount'>
      {amount / 100}
      /- Rupee(s) 
      </h2>
    </Link>
);

export default connect()(ExpenseListItem);