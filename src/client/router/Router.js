import React from 'react'
import { connect } from 'react-redux'
import { uiStates } from '../../store/ui'
import Menu from '../menu/Menu'
import NicknameChooser from '../nickname/NicknameChooser'
import HallOfFame from '../hallOfFame/HallOfFame'
import NewGame from '../newGame/NewGame'
import HeroMenu from '../heroMenu/HeroMenu'

class Router extends React.Component {
  render () {
    switch (this.props.ui) {
      case uiStates.NICKNAME: {
        return <NicknameChooser />
      }
      case uiStates.MENU: {
        return <Menu />
      }
      case uiStates.HALL_OF_FAME: {
        return <HallOfFame />
      }
      case uiStates.NEW_GAME: {
        return <NewGame />
      }
      case uiStates.HERO_MENU: {
        return <HeroMenu />
      }
      default: {
        return <div>No route definition for {this.props.ui}</div>
      }
    }
  }
}

export default connect(state => ({
  ui: state.ui
}))(Router)
