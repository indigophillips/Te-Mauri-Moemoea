import React from 'react'
import { connect } from 'react-redux'

import { Cloud } from './Cloud'

export default function CloudLayer (props) {
  return (
    <div className='level'>
      {props.dreams.map(dream => <Cloud key={dream.id} dream={dream}/>)}
    </div>
  )
}

const mapStateToProps = ({dreams}) => ({
  dreams: dreams[props.dreamType] 
})

// export default connect(mapStateToProps)(CloudLayer)