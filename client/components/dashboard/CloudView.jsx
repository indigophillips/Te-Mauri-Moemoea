import React from 'react'
import CloudLayer from './CloudLayer'
import NewDreamCloud from './NewDreamCloud'

const CloudView = (props) => {
  // eslint-disable-next-line
  const roles = Object.keys(props.dreams).filter(role => role != 'selection')

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

export default CloudView
