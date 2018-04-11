function serverHeroMenuReducer (state = {}, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default (state = {}, action) => {
  if (action.type.indexOf('server/heroMenu/') === 0) {
    return {
      [action.meta.playerId]: serverHeroMenuReducer(state.playerId),
      ...state
    }
  }

  return state
}
