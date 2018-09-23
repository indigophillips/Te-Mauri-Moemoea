import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AddDream = (props) => {
  if (!props.user) {
    return ('hi')
  } else {
    let id = props.user.id
    return (
      <div className='newDreamCont'>
        <Link to={`/user/${id}/dreams`}>
          <img className='newDream' src='./images/clouds/cloud1.png'/>
          <div className='newDreamTxt'>
            Add new Dream
          </div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(AddDream)
