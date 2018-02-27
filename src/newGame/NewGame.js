import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../ui'

class NewGame extends React.Component {
  componentDidMount () {
    // this.props.playOffline() // TODO: Support both
  }

  render () {
    return (
      <div>
        <h1>Choose your hero!</h1>
        <ul className='menu'>
          <li>
            <button onClick={this.props.heroMenu}>Choose</button>
          </li>
          <li>
            <button onClick={this.props.heroMenu}>Choose</button>
          </li>
          <li>
            <button onClick={this.props.heroMenu}>Choose</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(null, {
  heroMenu: uiCreators.heroMenu
})(NewGame)
