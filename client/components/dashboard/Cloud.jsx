import React, {Component} from 'react'

class Cloud extends Component {
  constructor (props) {
    super(props)

    this.state = {
      t: Math.random() * 100,
      timer: null
    }
  }

  componentDidMount () {
    this.setState({
      timer: setInterval(() => {this.setState({t: this.state.t + 1})}, 100)
    })
  }

  render () {
    return (
      <div className='cloud column is-4' style={{top: `${Math.floor(Math.sin(this.state.t / 10)  * 30)}px`}} onClick={this.props.onClick}>
        <img src={`./images/clouds/cloud${Math.floor(Math.random()*6 + 1)}.png`}/>
        <div className='cloudtext'>
          {this.props.dream.name}
        </div>
      </div>
    )
  }
}

export default Cloud
