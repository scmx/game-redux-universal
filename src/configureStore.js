import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'
import * as middlewares from './middleware'

export default function configureStore (initialState, middlewareConfig = {}) {
  const reducer = combineReducers(reducers)
  const middleware = combineMiddlewares(middlewareConfig)
  return createStore(reducer, initialState, composeWithDevTools(middleware))
}

function combineMiddlewares (config) {
  const configure = name => middlewares[name].call(null, config[name])
  const names = Object.keys(middlewares).filter(name => name !== 'default')
  return applyMiddleware(...names.map(configure).filter(val => val))
}
