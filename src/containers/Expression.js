import React from 'react'
import { connect } from 'react-redux'

import Expression from '../components/Expression'

const mapStateToProps = (state) => ({
  prevValue: state.prevValue,
  curOperator: state.curOperator,
  curValue: state.curValue
})

export default connect(mapStateToProps,null)(Expression)
