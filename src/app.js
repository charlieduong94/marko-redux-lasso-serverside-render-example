const { createStore } = require('redux')

const reducers = require('./reducers')
const store = createStore(reducers)

const Root = require('./containers/root')
const appContainer = document.getElementById('app')

Root.renderSync({ store })
  .appendTo(appContainer)
