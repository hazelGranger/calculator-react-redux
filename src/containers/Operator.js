import React from 'react'
import { connect } from 'react-redux'

import Operator from '../components/Operator'

import { inputOperator, setCurNumberToPrev, prepareInputNumber, calculation } from '../actions'

const mapStateToProps = (state) => ({
  curValue: state.curValue,
  curOperator: state.curOperator,
  prevValue: state.prevValue
})

const mapDispatchToProps = (dispatch) => ({
  inputOperator: operator => dispatch(inputOperator(operator)),
  setCurNumberToPrev: number => dispatch(setCurNumberToPrev(number)),
  prepareInputNumber: () => dispatch(prepareInputNumber()),
  calculation: (prevValue,curOperator) => dispatch(calculation(prevValue,curOperator))
})


export default connect(mapStateToProps,mapDispatchToProps)(Operator)
