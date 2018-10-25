import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClearOperator extends Component {

  static propTypes = {
    isAC: PropTypes.bool.isRequired,
    clear: PropTypes.func.isRequired,
    setToAC: PropTypes.func.isRequired
  }

  handleClick = () => {
    if (!this.props.isAC) {
      //this.setState( { isAc: false } )
      this.props.clear()
      this.props.setToAC()
    }
  }

  render(){
    return(
      <div className="Number" onClick={ this.handleClick }>
        { this.props.isAC ? "AC": "C" }
      </div>
    )
  }
}
