import React from 'react';
import { connect } from 'react-redux';
import { startSignIn } from '../actions/auth';

export const LoginPage = (props) => (
  <div>
    <button onClick={props.startSignIn}> Login With Google </button>
  </div>
);

export default connect(null, { startSignIn })(LoginPage);