import { combineReducers } from 'redux'

export default combineReducers({
  offline (state = true, action) {
    switch (action.type) {
      default: {
        return state
      }
    }
  }
})
