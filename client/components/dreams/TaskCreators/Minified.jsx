import React from 'react'

export const Selected = props => {
  return (
    <div onClick={props.open}>
      <h5 className='title is-5'>{props.taha}</h5>
    </div>
  )
}

export default Selected
