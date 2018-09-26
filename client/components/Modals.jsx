import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import modals from '../lib./modals'

const Modals = props => {
  return (
    <div className={`modal ${this.props.open && 'is-active'}`}>
      <div className="modal-background"></div>

      <div className="modal-content">
        {}
      </div>

      <button className="modal-close is-large" aria-label="close" onClick={this.props.close}></button>
      <Link></Link>
    </div>
  )
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(Modals)
