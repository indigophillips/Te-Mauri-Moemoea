import React, {Fragment} from 'react'

import CloudView from './CloudView'
import ProgressView from './ProgressView'

const DashboardMain = () => {
  return (
    <Fragment>
      <CloudView />
      <ProgressView />
    </Fragment>
  )
}

export default DashboardMain
