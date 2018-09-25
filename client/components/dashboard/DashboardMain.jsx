import React from 'react'
import CloudView from './CloudView'
import ProgressView from './ProgressView'

const DashboardMain = () => {
  return (
    <div className='dashCont'>
      <CloudView />
      <ProgressView />
    </div>
  )
}

export default DashboardMain
