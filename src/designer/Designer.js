import React from 'react'
import { connect } from 'react-redux'
import reduce from 'lodash/reduce'
import pick from 'lodash/pick'
// import generateName from 'sillyname'

const translations = {
  strength: 'Strength',
  defense: 'Defense',
  speed: 'Speed'
}

const translate = key => translations[key]

const buildFields = (options, onChange) =>
  reduce(
    options,
    (acc, value, name) => ({
      ...acc,
      [name]: { name, value, onChange: onChange(name) }
    }),
    {}
  )

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

const Text = ({ name, value, onChange }) => (
  <fieldset>
    <label>{translate(name)}</label>
    <input type='text' name={name} value={value} onChange={onChange} />
  </fieldset>
)

class Designer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      strength: 3,
      defense: 2,
      speed: 1,
      name: 'hej'
    }
  }

  render () {
    const onChange = field => event => {
      this.setState({ [field]: Number(event.target.value) })
    }
    const fields = buildFields(
      pick(this.state, ['strength', 'defense', 'speed']),
      onChange
    )
    return (
      <div className='designer'>
        <form>
          <Text {...fields.name} />
          <Skill {...fields.strength} />
          <Skill {...fields.defense} />
          <Skill {...fields.speed} />
        </form>
      </div>
    )
  }
}

export default connect(null)(Designer)
