import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from '../Modals'

import CloudView from './CloudView'
import ProgressView from './ProgressView'
import Navbar from '../Navbar'

const DashboardMain = (props) => {
  return (
    <section className="hero is-fullheight">
    <div className='hero-head'>
      <Navbar />
    </div>
    <div className="hero-body">
      <div className="container">
        <section className='dashCont'>
          <CloudView dreams={props.dreams} dashboard={true}/>
        </section>
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

function mapStateToProps (state) {
  return {
    dreams: state.dreams,
    user: state.userDetails
  }
}

export default connect(mapStateToProps)(DashboardMain)
