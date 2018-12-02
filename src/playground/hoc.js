import React from 'react';
import ReactDOM from 'react-dom';

const Profile = (props) => (
  <div>
    <h1>Profile</h1>
    <h3>THis is your profile</h3>
    <h4>{props.name}</h4>
  </div>
);

const auth = (Children) => {
  return (props) => (
    <div>
      { props.isAuth ? ( 
        <div>
          <h1>Yes you are authencated</h1>
          <Children {...props}/>
        </div>
      ) : (
        <p>Please Loggin!</p>
      )}
    </div>  
    )
}
const Auth = auth(Profile)

ReactDOM.render(<Auth name='Aman' isAuth={true}/>, document.getElementById('app'));