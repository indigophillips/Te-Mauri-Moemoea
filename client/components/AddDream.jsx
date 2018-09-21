import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const AddDream = (props) => {
  return (
    <div>
      <Link to={`user/${props.id}/dreams`}>
        <img src='./images/clouds/cloud1.png'/>
        <div className='cloudtext'>
          Add new Dream
        </div>
      </Link>
    </div>
  )
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(AddDream)
