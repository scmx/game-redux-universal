import { buildConstant, stringArrayToStringObject } from '../utils'

export const uiStates = buildConstant(
  stringArrayToStringObject(
    'NICKNAME',
    'MENU',
    'HALL_OF_FAME',
    'PVE',
    'PVP',
    'DESIGNER'
  )
)

export const uiActions = buildConstant(
  stringArrayToStringObject('SET_NICKNAME', 'PLAY_ONLINE', 'PLAY_OFFLINE', 'NEW_GAME', 'LOAD_GAME', 'HALL_OF_FAME')
)

export const uiCreators = buildConstant({
  chooseNickname: nickname => ({
    type: uiActions.SET_NICKNAME,
    payload: nickname
  }),

  playOnline: () => ({
    type: uiActions.PLAY_ONLINE
  }),

  playOffline: () => ({
    type: uiActions.PLAY_OFFLINE
  }),

  newGame: () => ({
    type: uiActions.NEW_GAME
  }),

  loadGame: () => ({
    type: uiActions.LOAD_GAME
  }),

  hallOfFame: () => ({
    type: uiActions.HALL_OF_FAME
  })
})
