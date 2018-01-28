import { characterActions } from './'

export default function charactersReducer (state = {}, action) {
  switch (action.type) {
    case characterActions.DESIGN_CHARACTER:
    case characterActions.DERIVE_CHARACTER: {
      return {
        ...state,
        [action.payload.id]: characterReducer(state[action.payload.id], action)
      }
    }
    default: {
      return state
    }
  }
}

function characterReducer (state = {}, action) {
  switch (action.type) {
    case characterActions.DESIGN_CHARACTER:
    case characterActions.DERIVE_CHARACTER: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
