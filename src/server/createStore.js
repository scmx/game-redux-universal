import configureStore from '../store/configureStore'

const localState = {
  server: {
    isServer: true,
    isClient: false
  }
}

const loggerMiddleware = store => next => action => {
  console.log(
    'action', action.type,
    'payload', action.payload,
    'meta', action.meta
  )
  const result = next(action)
  console.log('state', store.getState())
  return result
}

export default function createStore (io, initialState = localState) {
  return configureStore(initialState, {
    apiRequestMiddleware: { io },
    apiResponseMiddleware: { io },
    loggerMiddleware
  })
}
