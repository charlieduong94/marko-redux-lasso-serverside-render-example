const { connect } = require('marko-redux')
const {
  increment,
  decrement,
  setCount
} = require('../../actions/counterActions')

class CounterContainer {
  onCreate (input) {
    this.state = {
      count: input.count
    }
  }

  onInput (input) {
    this.state.count = input.count
  }
}

function mapStateToInput (state) {
  return {
    count: state.counter
  }
}

function mapDispatchToComponent (dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setCount: (input) => dispatch(setCount(input))
  }
}

module.exports = connect(
  mapStateToInput,
  mapDispatchToComponent
)(CounterContainer)
