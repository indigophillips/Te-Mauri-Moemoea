import React from 'react'

import CloudView from './CloudView'
import ProgressView from './ProgressView'

const DashboardMain = () => {
  return (
    <div className='dashCont'>
      <CloudView />
      <ProgressView className='level is-mobile botBar' />
    </div>
  )
}

export default DashboardMain
