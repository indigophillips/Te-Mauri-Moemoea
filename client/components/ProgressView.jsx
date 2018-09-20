import React from 'react'

import TotalProgress from './TotalProgress'
import TahaView from './TahaView'

function ProgressView (props) {
  return (
    <div className='columns'>
      <div className='column is-one-quarter'>
        <TotalProgress/>
      </div>
      <div className='column'>
        <TahaView/>
      </div>
    </div>
  )
}

export default ProgressView