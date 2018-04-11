import { apiActions } from '../api'

export default function heroChoicesReducer (state = {}, action) {
  switch (action.type) {
    case apiActions.HERO_CHOICES_LOAD_SUCCESS: {
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
