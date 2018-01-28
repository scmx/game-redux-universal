import React from 'react'
import { connect } from 'react-redux'
import { uiStates } from '../ui'
import Menu from '../menu/Menu'
import NicknameChooser from '../nickname/NicknameChooser'
import HallOfFame from '../hallOfFame/HallOfFame'
import Designer from '../designer/Designer'

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
      case uiStates.DESIGNER: {
        return <Designer />
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
