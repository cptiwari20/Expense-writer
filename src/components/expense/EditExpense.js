import React, { Component } from 'react';

class EditExpense extends Component {
  render(){
    return(
      <div>
        Edit the expense of if {this.props.match.params.id}
      </div>
    )
  }
}

export default EditExpense;