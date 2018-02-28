import { buildConstant, stringArrayToStringObject } from '../utils'

export const uiStates = buildConstant(
  stringArrayToStringObject(
    'NICKNAME',
    'MENU',
    'HALL_OF_FAME',
    'PVE',
    'PVP',
    'NEW_GAME',
    'HERO_MENU'
  )
)

export const uiActions = buildConstant(
  stringArrayToStringObject('SET_NICKNAME', 'PLAY_ONLINE', 'PLAY_OFFLINE', 'NEW_GAME', 'HERO_MENU', 'HALL_OF_FAME')
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

  heroMenu: (hero) => ({
    type: uiActions.HERO_MENU,
    payload: hero
  }),

  hallOfFame: () => ({
    type: uiActions.HALL_OF_FAME
  })
})
