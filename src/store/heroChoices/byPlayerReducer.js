import { apiActions } from '../api'

export default function heroChoicesByPlayerReducer (state = [], action) {
  switch (action.type) {
    case apiActions.HERO_CHOICES_LOAD_SUCCESS: {
      return {
        ...state,
        [action.meta.playerId]: Object.keys(action.payload)
      }
    }
    default: {
      return state
    }
  }
}
