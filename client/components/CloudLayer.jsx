import React, {Component} from 'react'
import { connect } from 'react-redux'

import { Cloud } from './Cloud'

function CloudLayer (props) {
  return (
    <div className='level'>
      {dreams.map(dream => <Cloud dream={dream}/>)}
    </div>
  )
}

const mapStateToProps = ({dreams}) => ({
  dreams: dreams[props.dreamType] 
})

export default connect(mapStateToProps)(CloudLayer)