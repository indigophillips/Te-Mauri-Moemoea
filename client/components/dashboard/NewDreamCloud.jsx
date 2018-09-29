import React from 'react'
import {connect} from 'react-redux'
          // <div className='newDreamTxt'>
          //   Add new Dream
          // </div>

const NewDreamCloud = (props) => {
  if (!props.user) {
    return ('Error')
  } else {
    let id = props.user.id
    return (
      <div className='newDreamCont'>
        <img onClick={props.switchFlicker}
          className='newDream' src='./images/clouds/koru_cloud.png'/>
      </div>
    )
  }
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamCloud)
