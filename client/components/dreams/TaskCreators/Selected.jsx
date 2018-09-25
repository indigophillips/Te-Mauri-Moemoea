import React, {Fragment} from 'react'

export const Selected = props => {
  return (
    <Fragment>
      <h2 className='title is-2'>{props.taha}:</h2>
        {props.tasks.map(task => (
          <h6 className='subtitle'>{task.name}</h6>
        ))}
      <button className='button' onClick={props.close}></button>
    </Fragment>
  )
}

export default Selected
