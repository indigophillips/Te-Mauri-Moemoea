import React from 'react'

import TotalProgress from './TotalProgress'
import TahaView from './TahaView'

function ProgressView (props) {
  return (
    <div className='level is-mobile botBar'>
      <TotalProgress/>
      <TahaView/>
    </div>
  )
}

export default ProgressView
