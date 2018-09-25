import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewDreamTitle from './NewDreamTitle'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dreamName: '',
      whanau: [],
      personal: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWhanau = this.addWhanau.bind(this)
    this.handleDream = this.handleDream.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  addWhanau () {
    let num = Math.floor(Math.random() * 3)
    if (num < 1) { num = 1 }
    this.setState({
      whanau: [...this.state.whanau, `/images/avatar${num}.jpg`]
    })
  }

  handleDream (e) {
    this.setState({
      personal: e.target.id
    })
  }

  render () {
    return (
      <div>
        <NewDreamTitle whanau={this.state.whanau}
          handleChange={this.handleChange}
          addWhanau={this.addWhanau}
          personal={this.state.personal}
          handleDream={this.handleDream}/>
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
