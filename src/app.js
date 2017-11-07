const { createStore } = require('redux')
const { registerStore } = require('marko-redux')

const reducer = require('./reducers')

const store = createStore(reducer)
registerStore(store)

const CounterContainer = require('./containers/counter-container')
const appContainer = document.getElementById('app')

console.log('rendering')

CounterContainer.renderSync()
  .appendTo(appContainer)

