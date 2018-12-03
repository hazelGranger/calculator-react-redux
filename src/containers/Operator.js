import { connect } from 'react-redux'

import Operator from '../components/Operator'

import { inputOperator, setCurNumberToPrev, prepareInputNumber, calculation } from '../actions'

export default connect(
  state=>state,
  {
    inputOperator,
    setCurNumberToPrev,
    prepareInputNumber,
    calculation
  }
)(Operator)
