import React from 'react'
import { connect } from 'react-redux'

import ClearOperator from '../components/ClearOperator'

import { clear, setToAC } from '../actions'

const mapStateToProps = (state) => ({
  isAC: state.ac
})

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clear()),
  setToAC: () => dispatch(setToAC())
})

export default connect(mapStateToProps,mapDispatchToProps)(ClearOperator)
