import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NewDreamTitle = (props) => {
  const id = props.user.id
  return (
    <Fragment>
      <Link to={`/user/${id}`}><img className='close' src='./images/close.png'></img></Link>
      <label>Dream Name</label>
      <input onClick={props.handleChange} placeholder='Dream Name'
        value='dreamName' name='dreamName' id='dreamName'>
      </input>
      <label>Who can help me?</label>
      <div className='columns'>
        {props.whanau.map(add => (
          <img
            className='column whanauAvatar'
            key={add}
            src={add}></img>
        ))}
        <div className='column'>

        </div>
        <button className='column' onClick={props.addWhanau}>+</button>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamTitle)
