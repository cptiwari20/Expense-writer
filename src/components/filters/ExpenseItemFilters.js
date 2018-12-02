import React from 'react';
import {connect} from 'react-redux';
import {filterByText, sortByDate, sortByAmount} from '../../actions/filters';

const NameFilterInput = ({dispatch, filters}) => (
  <div>
    <input 
      type='text'
      value={filters.text}
      onChange={ e => dispatch(filterByText(e.target.value)) }
    />
    <select 
      value={filters.sortBy}
      onChange={ e=> dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);
const mapStateToProps = ({filters}) => {
  return {
    filters
  }
}

export default connect(mapStateToProps)(NameFilterInput)