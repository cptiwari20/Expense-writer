import React from 'react';
import { connect } from 'react-redux';
import { startAuth } from '../actions/auth';

export const LoginPage = (props) => (
  <div>
    <button onClick={props.startAuth}> Login With Google </button>
  </div>
);

export default connect(null, { startAuth })(LoginPage);