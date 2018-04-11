import { uiActions, uiStates } from './'

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
      return uiStates.NEW_GAME
    }
    case uiActions.HERO_MENU: {
      return uiStates.HERO_MENU
    }
    case uiActions.HALL_OF_FAME: {
      return uiStates.HALL_OF_FAME
    }
    default: {
      return state
    }
  }
}
