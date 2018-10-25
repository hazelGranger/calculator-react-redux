import React, { Component } from 'react'

import Number from '../containers/Number'
import Operator from '../containers/Operator'
import Result from '../containers/Result'
import ClearOperator from '../containers/ClearOperator'
import Expression from '../containers/Expression'

class Calculator extends Component {
  render(){
    return(
      <div className="Calculator">
        <div className="screen">
          <Expression />
          <Result />
        </div>
        <Number value={"7"} />
        <Number value={"8"} />
        <Number value={"9"} />
        <Operator value="+" />
        <Number value={"4"} />
        <Number value={"5"} />
        <Number value={"6"} />
        <Operator value="-" />
        <Number value={"1"} />
        <Number value={"2"} />
        <Number value={"3"} />
        <Operator value="x" />
        <Number value={"0"} />
        <Number value="." />
        <Number type="signChanger" value="±" />
        <Operator value="÷" />
        <ClearOperator />
        <Number value="" />
        <Number value="" />
        <Operator value="=" />
      </div>
    );
  }
}

export default Calculator;
