import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../ui'

class HeroMenu extends React.Component {
  componentDidMount () {
    // this.props.playOffline() // TODO: Support both
  }

  render () {
    return (
      <div>
        <h1>HERO Menu!</h1>
      </div>
    )
  }
}

export default connect(null, {
  heroMenu: uiCreators.heroMenu
})(HeroMenu)
