import React, {Fragment} from 'react'

import TotalProgress from './TotalProgress'
import Balance from './Balance'

function ProgressView (props) {
  return (
    <Fragment>
      <TotalProgress className='totProgress'/>
      <Balance className='balance'/>
    </Fragment>
  )
}

export default ProgressView
