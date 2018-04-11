import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../../store/ui'

class Menu extends React.Component {
  componentDidMount () {
    // this.props.playOffline() // TODO: Support both
    this.props.newGame() // TODO: Remove
  }

  render () {
    return (
      <div>
        <h1>Menu!</h1>
        <ul className='menu'>
          <li>
            <button onClick={this.props.newGame}>New Game</button>
          </li>
          <li>
            <button onClick={this.props.heroMenu}>Continue</button>
          </li>
          <li>
            <button onClick={this.props.hallOfFame}>Hall of Fame</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(null, {
  newGame: uiCreators.newGame,
  heroMenu: uiCreators.heroMenu,
  hallOfFame: uiCreators.hallOfFame
})(Menu)
