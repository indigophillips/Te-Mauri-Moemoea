import React from 'react'
import {Link} from 'react-router-dom'
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
        <Link to={`/user/${id}/dreams`}>
          <img className='newDream' src='./images/clouds/ariki/cloud-01.png'/>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamCloud)
