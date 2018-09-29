import React, {Fragment, Component} from 'react'


const InvitesAndNewDreams = (props) => {
  if (!props.user) {
    return ('Error')
  } else {
    return (
      <Fragment>
        <div className='newDreamBtn'>
          <button type='button' onClick={this.switchFlicker}>Add Moemoe&amacr;</button>
        </div>
        <div className='inviteCont'>
          <p className='invites'>Invite 1</p>
          <p className='invites'>Invite 2</p>
        </div>
      </Fragment>
    )
  }
}

export default InvitesAndNewDreams
