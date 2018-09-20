import React from 'react'
import Select from 'react-select'

const physical = [
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''}
]

const mental = [
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''}
]
const spiritual = [
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''}
]

const family = [
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''},
  {value: '', label: ''}
]

const avatar = [
  {value: 'stingray', label: 'Whaitere (Stingray)'},
  {value: 'taniwha', label: 'Awarua (Taniwha)'},
  {value: 'eagle', label: 'Kahu (Eagle)'},
  {value: 'lizard', label: 'Ngarara (Lizard)'},
  {value: 'whale', label: 'Tuhoro (Whale)'},
  {value: 'shark', label: 'Mako (Shark)'}
]

class Avatar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (selected) {
    this.setState({selectedOption: selected.value})
  }

  render () {
    const {selectedOption} = this.state
    return (
      <div className='avatar'>
        <h1> Identify your strengthens </h1>
        <h2> Physical</h2>
        <Select
          value={physical.find(option => option.value === selectedOption)}
          onChange={this.handleChange}
          options={physical}
        />
        <h2>Mental </h2>
        <Select
          value={mental.find(option => option.value === selectedOption)}
          onChange={this.handleChange}
          options={mental}
        />
        <h2> Spiritual </h2>
        <Select
          value={spiritual.find(option => option.value === selectedOption)}
          onChange={this.handleChange}
          options={spiritual}
        />
        <h2> Spiritual </h2>
        <Select
          value={family.find(option => option.value === selectedOption)}
          onChange={this.handleChange}
          options={family}
        />
        <h1> Choose your Avatar </h1>
        <Select
          value={avatar.find(option => option.value === selectedOption)}
          onChange={this.handleChange}
          options={avatar}
        />
      </div>
    )
  }
}

export default Avatar
