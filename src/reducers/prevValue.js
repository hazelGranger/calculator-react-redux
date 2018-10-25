const prevValue = (state = "", action) => {
  switch (action.type) {
    case "SET_CUR_NUMBER_TO_PREV":
      return action.number? action.number: state
    default:
      return state
  }
}

export default prevValue
