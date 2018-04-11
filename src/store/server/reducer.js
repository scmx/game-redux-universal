import { combineReducers } from 'redux'

export default combineReducers({
  offline (state = true, action) {
    switch (action.type) {
      default: {
        return state
      }
    }
  },

  isServer (state = false, action) {
    switch (action.type) {
      default: {
        return state
      }
    }
  },

  isClient (state = false, action) {
    switch (action.type) {
      default: {
        return state
      }
    }
  }
})
