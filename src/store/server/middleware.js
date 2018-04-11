import { uiStates } from '../ui'
import { apiActions, apiCreators } from '../api'
import getSillyName from 'sillyname'
import uuidv4 from 'uuid/v4'

const randomStat = () => 0.1 + Math.random() * 0.8

const randomHero = () => ({
  id: uuidv4(),
  name: getSillyName(),
  level: 1,
  job: 'Mage',
  stats: {
    hp: randomStat(),
    atk: randomStat(),
    def: randomStat(),
    wis: randomStat(),
    spe: randomStat()
  }
})

const randomHeroes = count => Array(count)
  .fill()
  .map(randomHero)
  .reduce((acc, hero) => ({ ...acc, [hero.id]: hero }), {})

export default function serverMiddlewareFactory () {
  return function serverMiddleware (store) {
    return next => action => {
      const state = store.getState()

      if (!state.server.isServer) {
        return next(action)
      }

      switch (action.type) {
        case apiActions.HERO_CHOICES_LOAD_REQUEST: {
          const result = next(action)

          store.dispatch(apiCreators.heroChoicesLoadSuccess(
            randomHeroes(3), action.meta
          ))

          return result
        }
      }

      switch (state.ui) {
        case uiStates.MENU: {
          return next(action)
        }
        default: {
          return next(action)
        }
      }
    }
  }
}
