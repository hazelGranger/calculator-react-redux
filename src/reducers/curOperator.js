const curOperator = (state = "", action) => {
  switch (action.type) {
    case "INPUT_OPERATOR":
      return action.operator
    default:
      return state
  }
}

export default curOperator
