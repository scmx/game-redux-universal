import { API_REQUEST, API_RESPONSE } from './utils'
import { apiActions } from './'

const attachSocketMeta = ({ meta, ...action }, socket) => ({
  ...action,
  meta: {
    ...meta,
    socketId: socket.id
  }
})

const attachPlayerMeta = ({ meta, ...action }, player) => ({
  ...action,
  meta: {
    ...meta,
    playerId: player.id
  }
})

export function apiRequestMiddleware ({ socket, io } = {}) {
  return function apiRequestMiddleware (store) {
    if (io) {
      io.on('connection', socket => {
        console.log('Connection')
        socket.emit('message', 'Hello world')

        socket.on('API_REQUEST', action => {
          switch (action.type) {
            case apiActions.HERO_CHOICES_LOAD_REQUEST: {
              store.dispatch(attachSocketMeta(action, socket))
              break
            }
            default: {
              throw new Error(`Unexpected API_REQUEST ${JSON.stringify(action)}`)
            }
          }
        })
      })
    }

    function handleApiRequest (rawAction) {
      const state = store.getState()
      const action = attachPlayerMeta(rawAction, state.player)

      store.dispatch(action)

      if (state.server.isServer) {
        return
      }

      socket.emit('API_REQUEST', action)
    }

    return next => {
      return action => {
        const apiRequestAction = action[API_REQUEST]

        if (!apiRequestAction) {
          return next(action)
        }

        handleApiRequest(apiRequestAction)
      }
    }
  }
}

export function apiResponseMiddleware ({ socket, io } = {}) {
  return function apiResponseMiddleware (store) {
    if (socket) {
      socket.on('API_RESPONSE', action => {
        store.dispatch(action)
      })
    }

    function handleApiResponse (rawAction) {
      const state = store.getState()
      const action = attachPlayerMeta(rawAction, state.player)
      const { socketId } = action.meta

      store.dispatch(action)

      if (state.server.isClient) {
        return
      }

      io.to(socketId).emit('API_RESPONSE', action)
    }

    return next => {
      return action => {
        const apiResponseAction = action[API_RESPONSE]

        if (!apiResponseAction) {
          return next(action)
        }

        handleApiResponse(apiResponseAction)
      }
    }
  }
}
