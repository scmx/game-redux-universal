import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { characterCreators } from '../characters'

class HallOfFame extends React.Component {
  componentDidMount () {
    const noCharacters = Object.keys(this.props.characters).length === 0

    if (noCharacters) {
      this.props.designCharacter()
    }
  }

  render () {
    return (
      <div className='hof'>
        Hall Of Fame
        <button onClick={this.props.designCharacter}>New character</button>
        <ul className='hof__character_list'>
          {map(this.props.characters, character => (
            <li key={character.id} className='hof__character'>
              <button onClick={() => this.props.deriveCharacter(character)}>
                {character.name}
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
    characters: state.characters
  }),
  {
    designCharacter: characterCreators.designCharacter,
    deriveCharacter: characterCreators.deriveCharacter
  }
)(HallOfFame)
