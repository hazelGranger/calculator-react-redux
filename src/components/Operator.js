import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Operator extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    inputOperator: PropTypes.func.isRequired,
    setCurNumberToPrev: PropTypes.func.isRequired,
    curValue: PropTypes.string.isRequired,
    prevValue: PropTypes.string.isRequired,
    prepareInputNumber: PropTypes.func.isRequired,
    curOperator: PropTypes.string.isRequired,
    calculation: PropTypes.func.isRequired
  }

  handleClick = () => {
    console.log(this.props.curOperator);
    if (this.props.curOperator==="") {
      console.log("a");
      this.props.inputOperator(this.props.value)
      this.props.setCurNumberToPrev(this.props.curValue)
      this.props.prepareInputNumber()
    } else {


      new Promise( resolve => {

        this.props.calculation(this.props.prevValue,this.props.curOperator)
        resolve(this.props.value)
      }).then( (operator) => {
        // console.log(operator,curValue);
        this.props.inputOperator(operator)
        this.props.setCurNumberToPrev(this.props.curValue)
        this.props.prepareInputNumber()
      })
    }

  }

  render(){
    return(
      <div className="Operator" onClick={ this.handleClick }>{this.props.value}</div>
    );
  }
}

export default Operator;
