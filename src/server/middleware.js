import { uiStates } from '../ui'

export default function serverMiddleware () {
  return store => {
    return next => action => {
      const state = store.getState()

      switch (state.ui) {
        case uiStates.MENU: {
          return next(action)
        }
        default: {
          return next(action)
        }
      }
    }
  }
}
