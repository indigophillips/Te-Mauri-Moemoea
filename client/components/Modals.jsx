import React from 'react'
import {Link} from 'react-router-dom'
import {modals} from '../lib/modals'

const Modals = props => {
  const id = props.id
  let destination
  if (props.modalId === 0) { // continue here
    destination = `/user/${id}/avatar`
  } else if (props.modalId === 1) {
    destination = `/user/${id}/onboarding`
  } else if (props.modalId === 2) {
    destination = `/user/${id}`
  } else if (props.modalId === 3) {
    destination = `/user/${id}/newdream`
  }

  return (
    <div className={`modal ${props.open && 'is-active'}`}>
      <div className="modal-background"></div>

      <div className="modal-content">
        {modals[props.modalId]}
        <Link to={destination}><button className='button'>Ok</button></Link>
      </div>
    </div>
  )
}

export default Modals
