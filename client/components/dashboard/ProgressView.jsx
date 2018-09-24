import React from 'react'

import TotalProgress from './TotalProgress'
import Balance from './Balance'

function ProgressView (props) {
  return (
    <div className='level is-mobile botBar'>
      <TotalProgress className='totProgress'/>
      <Balance className='balance'/>
    </div>
  )
}

export default ProgressView
