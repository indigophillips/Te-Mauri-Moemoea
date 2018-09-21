import React from 'react'

import Cloud from './Cloud'

export default function CloudLayer (props) {
  return (
    <div className='level cloudlayer'>
      {props.dreams.map(dream => (
        <Cloud 
        key={dream.id} 
        dream={dream}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({dreams}) => ({
  dreams: dreams[props.dreamType]
})

// export default connect(mapStateToProps)(CloudLayer)