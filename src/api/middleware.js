import { API_REQUEST, API_RESPONSE } from './utils'

const attachMeta = (state, { meta, ...action }) => ({
  ...action,
  meta: {
    ...meta,
    playerId: state.player.id
  }
})

export function apiRequestMiddleware () {
  return store => {
    function handleApiRequest (action) {
      store.dispatch(attachMeta(store.getState(), action))

      // if (store.getState().server.offline) {
      //   return
      // }

      // socket.send('API_REQUEST', action)
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

export function apiResponseMiddleware () {
  return store => {
    function handleApiResponse (action) {
      store.dispatch(attachMeta(store.getState(), action))

      // if (store.getState().server.offline) {
      //   return
      // }

      // socket.send('API_RESPONSE', action)
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
