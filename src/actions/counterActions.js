function increment () {
  return { type: 'INCREMENT' }
}

function decrement () {
  return { type: 'DECREMENT' }
}

function setCount (count) {
  return { type: 'SET_COUNT', payload: count }
}

module.exports = {
  increment,
  decrement,
  setCount
}
