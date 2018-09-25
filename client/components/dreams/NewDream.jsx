import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import TaskCreation from './TaskCreation'
import ProgressView from '../dashboard/ProgressView';

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Fragment>
        <TaskCreation />
        <ProgressView />
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.userDetails
  }
}

export default connect(mapStateToProps, null)(NewDream)
