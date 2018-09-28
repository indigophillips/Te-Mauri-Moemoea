import React from 'react'
import {connect} from 'react-redux'

import Cloud from './Cloud'
import {selectDream} from '../../actions/selectDream.js'

function CloudLayer (props) {
  return (
    <div className='columns is-centered cloudLayer is-mobile is-multiline is-gapless'>
      {props.dreams.map(dream => (
        <Cloud
          key={dream.id}
          dream={dream}
          onClick={() => {
            if (props.randomizeNum && typeof props.randomizeNum === 'function') props.randomizeNum()
            if (props.customDreamClick) props.customDreamClick()
            props.select(props.role, dream.id)
          }}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({dreams}, ownProps) => {
  return {
    dreams: dreams[ownProps.role]
  }
}

const mapDispatchToProps = dispatch => ({
  select: (dreamType, dreamID) => dispatch(selectDream(dreamType, dreamID))
})

export default connect(mapStateToProps, mapDispatchToProps)(CloudLayer)
