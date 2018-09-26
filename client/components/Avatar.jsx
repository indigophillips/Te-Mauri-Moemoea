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
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className='avatar'>
              <h1> Choose your Avatar...</h1>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/Lizard.jpg"></img>
                    <div className='avatar-caption'>Ngarara</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/Eagle.png"></img>
                    <div className='avatar-caption'>Kahu</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/whale.png"></img>
                    <div className='avatar-caption'>Tuhoro</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/Stingray.jpg"></img>
                    <div className='avatar-caption'>Whaitere</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/Mako.jpg"></img>
                    <div className='avatar-caption'>Mako</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/taniwha.jpg"></img>
                    <div className='avatar-caption'>Taniwha</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Avatar


// <h1> Identify your strengthens </h1>
// <h2> Physical</h2>
// <Select
//   value={physical.find(option => option.value === selectedOption)}
//   onChange={this.handleChange}
//   options={physical}
// />
// <h2>Mental </h2>
// <Select
//   value={mental.find(option => option.value === selectedOption)}
//   onChange={this.handleChange}
//   options={mental}
// />
// <h2> Spiritual </h2>
// <Select
//   value={spiritual.find(option => option.value === selectedOption)}
//   onChange={this.handleChange}
//   options={spiritual}
// />
// <h2> Spiritual </h2>
// <Select
//   value={family.find(option => option.value === selectedOption)}
//   onChange={this.handleChange}
//   options={family}
// />