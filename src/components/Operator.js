import React, { Component } from 'react';

class Operator extends Component {
  render(){
    return(
      <div className="Operator">{this.props.value}</div>
    );
  }
}

export default Operator;
