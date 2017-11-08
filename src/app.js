const { createStore } = require('redux')
const { registerStore } = require('marko-redux')

const reducers = require('./reducers')

const store = createStore(reducers)
registerStore(store)

const CounterContainer = require('./containers/counter-container')
const appContainer = document.getElementById('app')

CounterContainer.renderSync()
  .appendTo(appContainer)
