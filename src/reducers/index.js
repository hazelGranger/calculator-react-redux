import { combineReducers } from 'redux'

import curValue from './curValue'
import curOperator from './curOperator'
import prevValue from './prevValue'
import operations from './operations'
import ac from './ac'

export default combineReducers({
  curValue,
  curOperator,
  prevValue,
  operations,
  ac
})
