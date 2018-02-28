import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../ui'
import getSillyName from 'sillyname'
import flatMap from 'lodash/flatMap'

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

class NewGame extends React.Component {
  constructor (args) {
    super(args)

    this.state = {
      heroes: [
        randomHero(),
        randomHero(),
        randomHero()
      ]
    }
  }

  componentDidMount () {
    // this.props.heroMenu(this.state.heroes[0])
  }

  render () {
    return (
      <div className='new-game'>
        <h1 className='new-game__heading'>Choose your hero!</h1>

        <div className='new-game__heroes'>
          {this.state.heroes.map((hero, index) => (
            <button
              className='new-game__hero'
              onClick={() => this.props.heroMenu(hero)}
              key={index}
            >
              <h3>{hero.name}</h3>

              <div className='new-game__title'>
                <span className='new-game__level'>Level {hero.level}</span>
                {' '}
                <span className='new-game__job'>{hero.job}</span>
              </div>

              <dl className='new-game__stats'>
                {flatMap(hero.stats, (value, name) => [(
                  <dt
                    className='new-game__stat-key'
                    key={name}
                  >
                    {name}
                  </dt>
                ), (
                  <dd
                    className='new-game__stat-val'
                    key={`${name}-val`}
                    style={{'--progress': `${Math.floor(value * 100)}%`}}
                  />
                )])}
              </dl>
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(null, {
  heroMenu: uiCreators.heroMenu
})(NewGame)
