import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux'
import Modal from '../Modals'

class InvitesAndNewDreams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.switchFlicker = this.switchFlicker.bind(this)
  }

  switchFlicker () {
    this.setState({
      modalOpen: true
    })
  }

  render () {
    if (!this.props.user) {
      return ('Error')
    } else {
      let id = this.props.user.id
      return (
        <Fragment>
          <div className='newDreamBtn'>
            <Modal open={this.state.modalOpen} id={id} modalId={2}/>
            <button type='button' onClick={this.switchFlicker}>Add Dream</button>
          </div>
          <div className='inviteCont'>
            <p className='invites'>Invite 1</p>
            <p className='invites'>Invite 2</p>
          </div>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(InvitesAndNewDreams)
