import React from 'react'
import { connect } from 'react-redux'

import Number from '../components/Number'

import { inputNumber, setToC, changeSign } from '../actions'

// const mapStateToProps = (state) => ({
//   curValue: state.curValue
// })

const mapDispatchToProps = (dispatch) => ({
  inputNumber: number => dispatch(inputNumber(number)),
  setToC: () => dispatch(setToC()),
  changeSign: () => dispatch(changeSign())
})

export default connect(null,mapDispatchToProps)(Number)
