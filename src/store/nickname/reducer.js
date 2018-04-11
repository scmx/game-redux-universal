import { uiActions } from '../ui'

export default function nicknameReducer (state = null, action) {
  switch (action.type) {
    case uiActions.SET_NICKNAME: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
