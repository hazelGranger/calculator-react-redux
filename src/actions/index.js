// Number

export const inputNumber = number => ({
  type: "INPUT_NUMBER",
  number
})

export const clear = () => ({
  type: "CLEAR"
})

export const setToAC = () => ({
  type: "SET_TO_AC"
})

export const setToC = () => ({
  type: "SET_TO_C"
})

export const changeSign = () => ({
  type: "CHANGE_SIGN"
})

export const setCurNumberToPrev = number =>({
  type: "SET_CUR_NUMBER_TO_PREV",
  number
})

export const prepareInputNumber = () => ({
  type: "PREPARE_INPUT_NUMBER"
})

// Operator

export const inputOperator = operator => ({
  type: "INPUT_OPERATOR",
  operator
})

export const calculation = (prevValue, operator) => ({
  type: "CALCULATION",
  prevValue,
  operator
})
