import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NewDreamCloud = (props) => {
  if (!props.user) {
    return ('Error')
  } else {
    let id = props.user.id
    return (
      <div className='newDreamCont'>
          <img onClick={props.switchFlicker}
            className='newDream' src='./images/clouds/cloud1.png'/>
          <div className='newDreamTxt'>
            Add new Dream
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamCloud)
