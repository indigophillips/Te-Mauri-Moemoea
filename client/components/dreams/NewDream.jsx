import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import TaskCreation from './TaskCreation'
import Balance from '../dashboard/Balance';

import {sumOverDream} from '../../lib/sumTasks'

import {wipeNewDream} from '../../actions/newDream'

class NewDream extends Component {
  componentDidMount() {
    this.props.dispatch(wipeNewDream())
  }

  render () {
    return (
      <Fragment>
        <TaskCreation />
        <div className='level is-mobile botBar'>
          <Balance className='balance' data={sumOverDream(this.props.dream)}/>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.userDetails,
    dream: state.newDream
  }
}

export default connect(mapStateToProps)(NewDream)
