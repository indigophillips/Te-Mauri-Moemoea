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
      modalOpen: false,
      randomNum: 45
    }
    this.switchFlicker = this.switchFlicker.bind(this)
    this.randomizeNum = this.randomizeNum.bind(this)
  }

  randomizeNum () {
    this.setState({
      randomNum: Math.floor(Math.random() * 100)
    })
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
              <CloudView 
                switchFlicker={this.switchFlicker}
                randomizeNum={this.randomizeNum}
                dreams={this.props.dreams}
                dashboard={true}/>
            </div>
          </div>
        </div>
        <div className='hero-footer'>
          <section className='section bargraph-section'>
              <ProgressView randomNum={this.state.randomNum}/>
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
