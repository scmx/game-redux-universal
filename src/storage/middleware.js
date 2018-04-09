import { KEY } from './'
import pick from 'lodash/pick'

const { localStorage } = window

export default function storageMiddlewareFactory () {
  return function storageMiddleware (store) {
    return next => action => {
      const result = next(action)
      const data = pick(store.getState(), ['nickname', 'skills'])

      localStorage.setItem(KEY, JSON.stringify(data))

      return result
    }
  }
}
