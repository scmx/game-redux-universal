import { uiActions, uiStates } from './'
import { characterActions } from '../characters'

export default function uiReducer (state = uiStates.NICKNAME, action) {
  switch (action.type) {
    case uiActions.SET_NICKNAME: {
      return uiStates.MENU
    }
    case uiActions.PLAY_ONLINE: {
      return uiStates.HALL_OF_FAME
    }
    case uiActions.PLAY_OFFLINE: {
      return uiStates.HALL_OF_FAME
    }
    case uiActions.NEW_GAME: {
      return uiActions.NEW_GAME
    }
    case uiActions.LOAD_GAME: {
      return uiActions.LOAD_GAME
    }
    case uiActions.HALL_OF_FAME: {
      return uiActions.HALL_OF_FAME
    }
    case characterActions.DESIGN_CHARACTER: {
      return uiStates.DESIGNER
    }
    // case characterActions.VIEW_CHARACTER: {
    //   return uiStates.
    // }
    default: {
      return state
    }
  }
}
