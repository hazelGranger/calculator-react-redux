import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Result extends Component {

  static propTypes = {
    prevValue: PropTypes.string.isRequired,
    curValue: PropTypes.string.isRequired
  }

  render(){
    const { prevValue, curValue } = this.props
    return(
      <div className="Result">
        { curValue ==="" ?  prevValue : curValue}
      </div>
    );
  }
}

export default Result;
