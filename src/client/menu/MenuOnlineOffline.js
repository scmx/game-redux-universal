import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../../store/ui'

class MenuOnlineOffline extends React.Component {
  render () {
    return (
      <ul className='menu'>
        <li>
          <button onClick={this.props.playOnline}>Play online</button>
        </li>
        <li>
          <button onClick={this.props.playOnline}>Play offline</button>
        </li>
      </ul>
    )
  }
}

export default connect(null, {
  playOnline: uiCreators.playOnline,
  playOffline: uiCreators.playOffline
})(MenuOnlineOffline)
