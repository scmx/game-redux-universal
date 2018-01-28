import React from 'react'
import { connect } from 'react-redux'

const translations = {
  strength: 'Strength',
  defense: 'Defense',
  speed: 'Speed'
}

const translate = (key) => translations[key]

const Skill = ({ name, value, onChange }) => (
  <fieldset>
    <label>{translate(name)}</label>
    <input
      type='range'
      name={name}
      value={value}
      onChange={onChange}
      min={1}
      max={5}
    />
  </fieldset>
)

class Designer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      strength: 3,
      defense: 2,
      speed: 1
    }
  }

  render () {
    // const { skills } = this.props
    const onChange = field => event => {
      this.setState({ [field]: event.target.value })
    }
    const fields = {
      strength: {
        name: 'strength',
        value: this.state.strength,
        onChange: onChange('strength')
      },
      defense: {
        name: 'defense',
        value: this.state.defense,
        onChange: onChange('defense')
      },
      speed: {
        name: 'speed',
        value: this.state.speed,
        onChange: onChange('speed')
      }
    }
    return (
      <div className='designer'>
        <form>
          <Skill {...fields.strength} />
          <Skill {...fields.defense} />
          <Skill {...fields.speed} />
        </form>
      </div>
    )
  }
}

export default connect(null)(Designer)
