import React from 'react'
import {connect} from 'react-redux'

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

const mapStateToProps = ({dreams}) => ({dreams})

export default connect(mapStateToProps)(DashboardMain)
