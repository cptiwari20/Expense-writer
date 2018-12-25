import React, { Component } from 'react';

const About = () => (
  <div className='page-header'>
    <div className='content-container'>
        <h2 className='page-header__title'>Welcome to the About</h2>
    </div> 
   <div className='content-container'>
    <h3>Welcome to the Expense Writer.</h3>
    <p>This is a simple expense writer project made for managing the expenses.</p>
    <p>All the data is securely stored in the cloud database so that you can fetch it easily anywhere and anytime.</p>
      For More details click <a href='https://github.com/cptiwari20/expense-writer.git'>here</a>
   </div>
  </div>
);

export default About;