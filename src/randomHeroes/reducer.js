import { apiActions } from '../api'

export default function randomHeroesReducer (state = {}, action) {
  switch (action.type) {
    case apiActions.HERO_MENU_LOAD_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
