import React, {Component} from 'react'

class Cloud extends Component {
  constructor (props) {
    super(props)
    this.state = {
      t: Math.random() * 1000,
      timer: null,
      cloudType: Math.floor(Math.random()*6 + 1)
    }
  }

  componentDidMount () {
    this.setState({
      timer: setInterval(() => {this.setState({t: (this.state.t + 1) % 360000})}, 20)
    })
  }

  radiansToDegrees(num) {
    return num*180/(Math.PI)
  }

  degreesToRadians(num) {
    return num*(Math.PI)/180    
  }

  render () {
    return (
      <div className='cloud column is-4' style={{
        top: `${Math.sin(this.state.t / 220)  * 20}mm`,
        left: `${Math.cos(this.state.t / 100)  * 20}mm`}}
        onClick={this.props.onClick}>
        <img src={`./images/clouds/cloud${this.state.cloudType}.png`}/>
        <div className='cloudtext'>
          {this.props.dream.name}
        </div>
      </div>
    )
  }
}

export default Cloud
