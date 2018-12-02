import React from 'react';
import {connect} from 'react-redux';
import {filterByText} from '../../actions/filters';

const NameFilterInput = ({dispatch}) => (
  <div>
    <input onChange={ e => dispatch(filterByText(e.target.value)) }/>
  </div>
);

export default connect()(NameFilterInput)