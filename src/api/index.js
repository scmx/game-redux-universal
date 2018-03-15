import { buildConstant } from '../utils'
import { buildAPI } from './utils'

const heroMenuApi = buildAPI(
  'HERO_MENU_LOAD'
)

export const apiActions = buildConstant({
  ...heroMenuApi.actions
})

export const apiCreators = buildConstant({
  ...heroMenuApi.creators
})
