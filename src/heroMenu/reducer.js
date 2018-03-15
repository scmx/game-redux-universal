import { apiActions } from '../api'

export default function heroMenuReducer (state = {}, action) {
  switch (action.type) {
    case apiActions.HERO_MENU_LOAD_SUCCESS: {
      return {
        ids: Object.keys(action.payload),
        ...state
      }
    }
    default: {
      return state
    }
  }
}
