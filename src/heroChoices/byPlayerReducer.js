import { apiActions } from '../api'

export default function heroChoicesByPlayerReducer (state = [], action) {
  switch (action.type) {
    case apiActions.HERO_CHOICES_LOAD_SUCCESS: {
      return Object.keys(action.payload)
    }
    default: {
      return state
    }
  }
}
