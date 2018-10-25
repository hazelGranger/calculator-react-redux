const curValue = (state = "0", action) => {
  switch (action.type) {
    case "INPUT_NUMBER":
      if (state === "-0" ) {
        return "-" + action.number
      } else{
        return (state === "0" && action.number !==".") ? action.number : state + action.number
      }
    case "CLEAR":
      return "0"
    case "CHANGE_SIGN":
      return state.indexOf("-") === -1 ?  ("-" + state) : state.substring(1)
    case "PREPARE_INPUT_NUMBER":
      return ""
    case "CALCULATION":
      switch (action.operator) {
        case "+":
          return (parseFloat(action.prevValue) + parseFloat(state)) + ""
          break;
        case "-":
          return (parseFloat(action.prevValue) - parseFloat(state)) + ""
        case "x":
          return (parseFloat(action.prevValue) * parseFloat(state)) + ""
        case "÷":
          return (parseFloat(action.prevValue) / parseFloat(state)) + ""
        case "=":
          return state
        default:
          return state
      }
      return state
    default:
      return state
  }
}

export default curValue
