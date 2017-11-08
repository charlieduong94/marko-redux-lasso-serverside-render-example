function counterReducer (state = 0, action) {
  switch (action.type) {
    case 'SET_COUNT':
      return action.payload
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

module.exports = counterReducer
