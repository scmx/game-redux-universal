import uuidv4 from 'uuid/v4'

import { buildConstant, stringArrayToStringObject } from '../utils'

export const characterActions = buildConstant(
  stringArrayToStringObject('DESIGN_CHARACTER', 'DERIVE_CHARACTER')
)

export const characterCreators = buildConstant({
  designCharacter: () => ({
    type: characterActions.DESIGN_CHARACTER,
    payload: { id: uuidv4() }
  }),

  deriveCharacter: character => ({
    type: characterActions.DERIVE_CHARACTER,
    payload: { ...character, id: uuidv4(), parentId: character.id }
  })
})
