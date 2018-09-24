import React, {Fragment} from 'react'

import CloudView from './CloudView'
import ProgressView from './ProgressView'
import TotalProgress from './TotalProgress'

const DashboardMain = () => {
  return (
    <Fragment>
      <CloudView />
      <ProgressView />
      <TotalProgress />
    </Fragment>
  )
}

export default DashboardMain
