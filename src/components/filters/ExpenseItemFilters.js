import React from 'react';
import {connect} from 'react-redux';
import {filterByText, sortByDate, sortByAmount} from '../../actions/filters';

const NameFilterInput = ({dispatch}) => (
  <div>
    <input onChange={ e => dispatch(filterByText(e.target.value)) }/>
    <select onChange={e=> dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())}>
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

export default connect()(NameFilterInput)