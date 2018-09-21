import React, {Component, Fragment} from 'react'

import CloudView from './CloudView'
import ProgressView from './ProgressView'

export default class DashboardMain extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <CloudView />
        <ProgressView />
      </Fragment>
    )
  }
}
