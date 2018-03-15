import { buildConstant } from '../utils'
import camelCase from 'lodash/camelCase'

export const API_REQUEST = Symbol('API_REQUEST')
export const API_RESPONSE = Symbol('API_RESPONSE')

const apiRequest = (type) => payload => ({
  [API_REQUEST]: { type, payload }
})

const apiResponse = (type) => payload => ({
  [API_RESPONSE]: { type, payload }
})

export function buildAPI (...apiNames) {
  const actions = {}
  const creators = {}

  apiNames.forEach(name => {
    const request = `${name}_REQUEST`
    const success = `${name}_SUCCESS`
    const failure = `${name}_FAILURE`

    actions[request] = `api/${request}`
    actions[success] = `api/${success}`
    actions[failure] = `api/${failure}`

    creators[camelCase(request)] = apiRequest(actions[request])
    creators[camelCase(success)] = apiResponse(actions[success])
    creators[camelCase(failure)] = apiResponse(actions[failure])
  })

  return buildConstant({ actions, creators })
}
