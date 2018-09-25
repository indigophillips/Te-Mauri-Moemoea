import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NewDreamTitle = (props) => {
  const id = props.user.id
  return (
    <Fragment>
      <Link to={`/user/${id}`}><img className='close' src='./images/close.png'></img></Link>
      <label>Dream Name</label>
      <input onClick={props.handleChange}
        placeholder='Dream Name'
        id='dreamName'
        name='dreamName'
        value={props.dreamName}
      >
      </input>
      <label>Who can help me?</label>
      <div className='columns is-mobile'>
        <div className='column is-10 columns is-mobile is-multiline whanauAvatarDiv'>
          {props.whanau.map(add => (
            <div className='column is-2' key={add}>
              <img
                src={add}></img>
            </div>
          ))}
        </div>
        <button className='column is-2' onClick={props.addWhanau}>+</button>
      </div>
      <form className='columns is-mobile control'>
        <label htmlFor="" className='column is-6'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='personal' checked={props.personal === 'true'} id='true'/>
        Personal Dreams
        </label>
        <label htmlFor="" className='column is-6'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='whanau' checked={props.personal === 'false'} id='false'/>
        Whanau Dreams
        </label>
        {/* <input type='radio'/> */}
      </form>
    </Fragment>
  )
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamTitle)
