import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NewDreamTitle = (props) => {
  const id = props.user.id
  return (
    <Fragment>
      <Link to={`/user/${id}`}><button class="delete is-large close"></button></Link>
      <input onChange={props.handleChange}
        placeholder='Dream Name'
        id='dreamName'
        name='dreamName'
        value={props.dreamName}
      >
      </input>
      <label>Who can help me?</label>
      <div className='columns is-mobile'>
        <div className='column is-10 columns is-mobile whanauAvatarDiv'>
          {props.whanau.map((add, i) => (
            <div className='column is-2' key={i}>
              <img
                src={add}></img>
            </div>
          ))}
        </div>
        <button class='button is-rounded column is-2' onClick={props.addWhanau}>add</button>
      </div>
      <form className='columns is-mobile control'>
        <label htmlFor="" className='column is-4'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='personal' checked={props.dreamScope === 'personal'} id='personal'/>
        Personal Dreams
        </label>
        <label htmlFor="" className='column is-4'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='whanau' checked={props.dreamScope === 'whanau'} id='whanau'/>
        Whanau Dreams
        </label>
        <label htmlFor="" className='column is-4'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='public' checked={props.dreamScope === 'public'} id='public'/>
        Public Dreams
        </label>
      </form>
    </Fragment>
  )
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamTitle)
