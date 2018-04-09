import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import configureStore from './configureStore'
import { getLocalState } from './storage'
import './browser.scss'
import storageMiddleware from './storage/middleware'
import { createLogger } from 'redux-logger'

const socket = window.io()

const localState = getLocalState()

const initialState = {
  ...localState,
  server: {
    ...localState.server,
    isServer: false,
    isClient: true
  }
}

const store = configureStore(initialState, {
  loggerMiddleware: createLogger(),
  storageMiddleware: storageMiddleware()
})

socket.on('message', message => {
  console.log('message', message)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
