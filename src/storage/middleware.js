import { KEY } from './'
import pick from 'lodash/pick'

const { localStorage } = window

export default function storageMiddleware () {
  return store => next => action => {
    const result = next(action)
    const data = pick(store.getState(), ['nickname', 'skills'])

    localStorage.setItem(KEY, JSON.stringify(data))

    return result
  }
}
