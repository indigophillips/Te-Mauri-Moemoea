import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import TaskCreation from './TaskCreation'
import ProgressView from '../dashboard/ProgressView';

import {wipeNewDream} from '../../actions/newDream'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(wipeNewDream())
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

export default connect(mapStateToProps)(NewDream)
