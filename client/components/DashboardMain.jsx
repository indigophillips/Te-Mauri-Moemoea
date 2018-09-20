import React, {Component} from 'react'

import CloudView from './CloudView'
import ProgressView from './ProgressView'

export default class DashboardMain extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <CloudView/>
        <ProgressView/>
      </React.Fragment>
    )
  }
}
