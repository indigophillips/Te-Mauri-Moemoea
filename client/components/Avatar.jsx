import React from 'react'
import {Select} from 'react-select'

const options = [
  {value: 'stingray', label: 'Whaitere'},
  {value: 'taniwha', label: 'Awarua'}
]

class Avatar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (selectedOption) {
    this.setState({selectedOption})
  }

  render () {
    const {selectedOption} = this.state.selectedOption

    return (
      <div className='avatar'>
        <h1> Select your Avatar </h1>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return {
//    Select: selectedOption
//   }
// }
export default Avatar
