import { buildConstant } from '../utils'
import { buildAPI } from './utils'

const heroChoicesApi = buildAPI(
  'HERO_CHOICES_LOAD'
)

export const apiActions = buildConstant({
  ...heroChoicesApi.actions
})

export const apiCreators = buildConstant({
  ...heroChoicesApi.creators
})
