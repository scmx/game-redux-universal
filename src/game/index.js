import { buildConstant, stringArrayToStringObject } from '../utils'

export const gameActions = buildConstant(stringArrayToStringObject('PLAY'))

export const gameCreators = buildConstant({
  play: () => ({
    type: gameActions.PLAY
  })
})
