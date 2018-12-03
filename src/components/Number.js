import React, { Component } from 'react';

import PropTypes from 'prop-types'

class Number extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    inputNumber: PropTypes.func.isRequired,
    setToC: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.inputNumber(this.props.value)
    this.props.setToC()
  }

  handleChangeSign = () => {
    this.props.changeSign()
  }

  render(){
    console.log(this.props);
    return this.props.type && this.props.type === "signChanger" ? (
      <div className="Number" onClick={ this.handleChangeSign }>{this.props.value}</div>
    ) : (
      <div className="Number" onClick={ this.handleClick }>{this.props.value}</div>
    )
  }
}

export default Number;
