import React from 'react'
import {connect} from 'react-redux'

import CloudView from './CloudView'
import ProgressView from './ProgressView'

const DashboardMain = (props) => {
  return (
    <div className='dashCont'>
      <CloudView dreams={props.dreams} dashboard={true}/>
      <ProgressView />
    </div>
  )
}

const mapStateToProps = ({dreams}) => ({dreams})

export default connect(mapStateToProps)(DashboardMain)
