import React, { Component } from 'react';

import Number from './Number';
import Operator from './Operator';
import Result from './Result';

class Calculator extends Component {
  render(){
    return(
      <div className="Calculator">
        <Result />
        <Number value="7" />
        <Number value="8" />
        <Number value="9" />
        <Operator value="+" />
        <Number value="4" />
        <Number value="5" />
        <Number value="6" />
        <Operator value="-" />
        <Number value="1" />
        <Number value="2" />
        <Number value="3" />
        <Operator value="x" />
        <Number value="0" />
        <Number value="." />
        <Operator value="=" />
        <Operator value="÷" />
      </div>
    );
  }
}

export default Calculator;
