import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import reduce from 'lodash/reduce'
import pick from 'lodash/pick'
import generateName from 'sillyname'
import { gameCreators } from '../game'

const translations = {
  name: 'Name',
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

const Skill = ({ name, ...rest }) => (
  <fieldset>
    <label className='label'>{translate(name)}</label>
    <Input type='range' name={name} min={1} max={5} {...rest} />
  </fieldset>
)

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  className,
  ...rest
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className={cn('input', className)}
    {...rest}
  />
)

const Text = ({ name, ...rest }) => (
  <fieldset>
    <label className='label'>{translate(name)}</label>
    <Input type='text' {...rest} />
  </fieldset>
)

const Button = ({ primary, type = 'button', className, children, ...rest }) => (
  <button
    type={type}
    className={cn('button', { 'button--primary': primary }, className)}
    {...rest}
  >
    {children}
  </button>
)

class Designer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: generateName(),
      strength: 3,
      defense: 2,
      speed: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    const onChange = field => event => {
      this.setState({ [field]: Number(event.target.value) })
    }
    const fields = buildFields(
      pick(this.state, ['name', 'strength', 'defense', 'speed']),
      onChange
    )
    return (
      <div className='designer'>
        <form onSubmit={this.handleSubmit} className='designer__form'>
          <Text {...fields.name} />
          <Skill {...fields.strength} />
          <Skill {...fields.defense} />
          <Skill {...fields.speed} />
          <fieldset>
            <Button primary type='submit'>
              Done
            </Button>
          </fieldset>
        </form>
      </div>
    )
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.play(this.state)
  }
}

export default connect(null, {
  play: gameCreators.play
})(Designer)
