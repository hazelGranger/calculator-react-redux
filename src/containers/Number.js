import { connect } from 'react-redux'

import Number from '../components/Number'

import { inputNumber, setToC, changeSign } from '../actions'

export default connect(
  null,
  {
    inputNumber,
    setToC,
    changeSign
  }
)(Number)
