import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import configureStore from '../store/configureStore'
import { getLocalState } from '../store/storage'
import './index.scss'
import storageMiddleware from '../store/storage/middleware'
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
  apiRequestMiddleware: { socket },
  apiResponseMiddleware: { socket },
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
