import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Expression extends Component {

  static propTypes = {
    curValue: PropTypes.string.isRequired,
    curOperator: PropTypes.string.isRequired,
    prevValue: PropTypes.string.isRequired
  }

  render(){
    return(
      <div className="Expression">
        { this.props.prevValue + " " +
        this.props.curOperator + " " +
        this.props.curValue }
      </div>
    );
  }
}

export default Expression;
