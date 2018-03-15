import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import pick from 'lodash/pick'

class HallOfFame extends React.Component {
  render () {
    return (
      <div className='hof'>
        Hall Of Fame
        <button>New character</button>
        <ul className='hof__character_list'>
          {map(this.props.heroes, hero => (
            <li key={hero.id} className='hof__hero'>
              <button>
                {hero.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    // TODO: List previous heroes instead
    heroes: pick(state.heroChoices, state.heroChoicesByPlayer)
  })
)(HallOfFame)
