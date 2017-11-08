const { combineReducers } = require('redux')

const count = require('./count')

module.exports = combineReducers({ count })
