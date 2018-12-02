import React from 'react';
import {connect} from 'react-redux';
import {filterByName} from '../../actions/filters';

const NameFilterInput = ({dispatch}) => (
  <div>
    <input onChange={ e => dispatch(filterByName(e.target.value)) }/>
  </div>
);

export default connect()(NameFilterInput)