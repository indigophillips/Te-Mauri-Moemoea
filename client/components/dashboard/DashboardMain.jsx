import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from '../Modals'

import CloudView from './CloudView'
import ProgressView from './ProgressView'
import Navbar from '../Navbar'

class DashboardMain extends Component {
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
    let id = this.props.user.id
    return (
      <section className="hero is-fullheight">
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container">
            <Modal open={this.state.modalOpen} id={id} modalId={3}/>
            <div className='dashCont'>
              <CloudView switchFlicker={this.switchFlicker}
                dreams={this.props.dreams}
                dashboard={true}/>
            </div>
          </div>
        </div>
        <div className='hero-footer'>
          <section className='section bargraph-section'>
              <ProgressView />
          </section>
        </div>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    dreams: state.dreams,
    user: state.userDetails
  }
}

export default connect(mapStateToProps)(DashboardMain)
