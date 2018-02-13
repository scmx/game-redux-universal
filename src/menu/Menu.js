import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../ui'
import MenuOnlineOffline from './MenuOnlineOffline'

class Menu extends React.Component {
  componentDidMount () {
    // this.props.playOffline() // TODO: Support both
  }

  render () {
    const menuItems = (
      <MenuOnlineOffline />
    )
    return (
      <div>
        <h1>Menu!</h1>
        {menuItems}
      </div>
    )
  }
}

export default connect(null, {
  playOnline: uiCreators.playOnline,
  playOffline: uiCreators.playOffline
})(Menu)
