import React from 'react';
import ReactDOM from 'react-dom';

const Profile = (props) => (
  <div>
    <h1>Profile</h1>
    <h3>THis is your profile</h3>
    <h4>{props.name}</h4>
  </div>
);

ReactDOM.render(<Profile name='vikas' />, document.getElementById('app'));