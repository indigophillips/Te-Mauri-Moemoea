import React from 'react'
import CloudLayer from './CloudLayer'
import NewDreamCloud from './NewDreamCloud'

import {connect} from 'react-redux'

const CloudView = (props) => {
  const roles = Object.keys(props.dreams)

  return (
    <div className='cloudview'>
      {roles.map(role => (
        <CloudLayer
          key={role}
          role={role}
          dreams={props.dreams[role]}
        />
      ))}
      <NewDreamCloud />
    </div>
  )
}

const mapStateToProps = ({dreams}) => ({dreams})

export default connect(mapStateToProps)(CloudView)
