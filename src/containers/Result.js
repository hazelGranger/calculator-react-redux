import React from 'react'
import { connect } from 'react-redux'

import Result from '../components/Result'

const mapStateToProps = (state) => ({
  prevValue: state.prevValue,
  curValue: state.curValue
})

export default connect(mapStateToProps,null)(Result)
