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
  stringArrayToStringObject('SET_NICKNAME', 'PLAY_ONLINE', 'PLAY_OFFLINE')
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
  })
})
