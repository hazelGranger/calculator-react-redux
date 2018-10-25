const ac = (state = true, action) => {
  switch (action.type) {
    case "SET_TO_AC":
      return true
    case "SET_TO_C":
      return false
    default:
      return state
  }
}

export default ac
