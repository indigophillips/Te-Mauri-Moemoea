import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Dreams = (props) => {
  if (!props.user) {
    return ('Error')
  } else {
    let id = props.user.id
    return (
      <Fragment>
        <div className='newDreamBtn'>
          <Link to={`/user/${id}/newdream`}>Add Dream</Link>
        </div>
        <div className='inviteCont'>
          <p className='invites'>Invite 1</p>
          <p className='invites'>Invite 2</p>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(Dreams)
