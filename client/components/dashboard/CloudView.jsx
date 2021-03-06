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
          randomizeNum={props.randomizeNum}
          dreams={props.dreams[role]}
          customDreamClick={props.customDreamClick}
        />
      ))}
      {props.dashboard && <NewDreamCloud switchFlicker={props.switchFlicker}/>}
    </div>
  )
}

export default CloudView
