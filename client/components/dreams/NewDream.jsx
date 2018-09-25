import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewDreamTitle from './NewDreamTitle'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dreamName: '',
      whanau: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWhanau = this.addWhanau.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  addWhanau () {
    this.setState({
      whanau: [...this.state.whanau, `/images/avatar${Math.floor(Math.random() * 3)}.jpg`]
    })
  }

  render () {
    return (
      <div>
        <NewDreamTitle whanau={this.state.whanau} handleChange={this.handleChange} addWhanau={this.addWhanau}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.userDetails
  }
}

export default connect(mapStateToProps, null)(NewDream)
