import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import configureStore from './configureStore'
import { getInitialState } from './storage'
import './browser.scss'

const socket = window.io()

const store = configureStore(getInitialState())

socket.on('message', message => {
  console.log('message', message)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
