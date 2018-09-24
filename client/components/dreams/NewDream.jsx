import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewDreamTitle from './NewDreamTitle'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dreamName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <div>
        <NewDreamTitle handleChange={this.handleChange}/>
        hi
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
