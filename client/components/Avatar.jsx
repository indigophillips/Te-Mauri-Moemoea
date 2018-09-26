import React from 'react'
import Select from 'react-select'

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
                    <img className='avatar-image' src="images/avatar3.png"></img>
                    <div className='avatar-caption'>Ngarara</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/avatar4.png"></img>
                    <div className='avatar-caption'>Kahu</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/avatar5.png"></img>
                    <div className='avatar-caption'>Tuhoro</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/avatar1.png"></img>
                    <div className='avatar-caption'>Whaitere</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/avatar2.png"></img>
                    <div className='avatar-caption'>Mako</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img className='avatar-image' src="images/avatar6.png"></img>
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