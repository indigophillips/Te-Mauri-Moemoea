import React, {Component} from 'react'

class Cloud extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: [0, 0]
    }
  }

  render () {
    return (
      <div className='cloud level-item' onClick={this.props.onClick}>
        <img src={`./images/clouds/cloud${Math.floor(Math.random()*6 + 1)}.png`}/>
        <div className='cloudtext'>
          {this.props.dream.name}
        </div>
      </div>
    )
  }
}

export default Cloud
