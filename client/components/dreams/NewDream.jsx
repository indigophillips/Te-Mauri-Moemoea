import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
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
