import React from 'react'
import { connect } from 'react-redux'
import { uiCreators } from '../ui'

class NicknameChooser extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    if (this.props.nickname) {
      this.props.chooseNickname(this.props.nickname)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='nickname' required />
        <button type='submit'>Play</button>
      </form>
    )
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log('nickname', this.refs.nickname.value)
    this.props.chooseNickname(this.refs.nickname.value)
  }
}

export default connect(
  state => ({
    nickname: state.nickname
  }),
  {
    chooseNickname: uiCreators.chooseNickname
  }
)(NicknameChooser)
