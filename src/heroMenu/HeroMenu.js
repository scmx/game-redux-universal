import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../ui'

class HeroMenu extends React.Component {
  componentDidMount () {
    // this.props.playOffline() // TODO: Support both
  }

  render () {
    return (
      <div className='hero-menu'>
        <div className='hero-menu__left'>
          <div className='hero-menu__showcase'>Sprite and text for lvl, job etc</div>
          <div className='hero-menu__stats'>Stats</div>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  heroMenu: uiCreators.heroMenu
})(HeroMenu)
