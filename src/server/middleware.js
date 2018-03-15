import { uiStates } from '../ui'
import { apiActions, apiCreators } from '../api'
import getSillyName from 'sillyname'
import uuidv4 from 'uuid/v4'

const randomStat = () => 0.1 + Math.random() * 0.8

const randomHero = () => ({
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

export default function serverMiddleware () {
  return store => {
    return next => action => {
      const state = store.getState()

      switch (action.type) {
        case apiActions.HERO_CHOICES_LOAD_REQUEST: {
          const result = next(action)

          store.dispatch(apiCreators.heroChoicesLoadSuccess({
            [uuidv4()]: randomHero(),
            [uuidv4()]: randomHero(),
            [uuidv4()]: randomHero()
          }))

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
