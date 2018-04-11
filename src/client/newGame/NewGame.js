import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../../store/ui'
import flatMap from 'lodash/flatMap'
import pick from 'lodash/pick'
import map from 'lodash/map'
import { apiCreators } from '../../store/api'

class NewGame extends React.Component {
  componentDidMount () {
    this.props.heroChoicesLoadRequest()
    // this.props.heroMenu(this.state.heroes[0])
  }

  render () {
    return (
      <div className='new-game'>
        <h1 className='new-game__heading'>Choose your hero!</h1>

        <div className='new-game__heroes'>
          {map(this.props.heroes, (hero, id) => (
            <button
              className='new-game__hero'
              onClick={() => this.props.heroMenu(hero)}
              key={id}
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

NewGame.defaultProps = {
  heroes: []
}

export default connect(
  state => ({
    heroes: pick(state.heroChoices, state.heroChoicesByPlayer[state.player.id])
  }),
  {
    heroMenu: uiCreators.heroMenu,
    heroChoicesLoadRequest: apiCreators.heroChoicesLoadRequest
  }
)(NewGame)
