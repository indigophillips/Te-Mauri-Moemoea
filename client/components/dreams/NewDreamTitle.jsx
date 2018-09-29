import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NewDreamTitle = (props) => {
  const id = props.user.id
  return (
    <Fragment>
      <Link to={`/user/${id}`}><button className="delete is-large close"></button></Link>
      <input onChange={props.handleChange}
        placeholder='Moemoeā Name'
        id='dreamName'
        name='dreamName'
        type='text'
        value={props.dreamName}
      >
      </input>
      <label>Who can help me?</label>
      <div className='columns is-mobile'>
        <div className='column is-10 columns is-mobile whanauAvatarDiv'>
          {props.whanau.map((add, i) => (
            (i < 4 && (<div className='column is-3' key={i}>
              <img src='/images/contributor.png'></img>
            </div>))
          ))}
        </div>
        <button className='button' onClick={props.addWhanau}>add</button>
      </div>
      <form className='columns is-mobile control'>
        <div className='column is-4'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='personal' checked={props.dreamScope === 'personal'} id='personal'/>
          <label for='personal'>Personal</label>
        </div>
        <div className='column is-4'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='whanau' checked={props.dreamScope === 'whanau'} id='whanau'/>
          <label for='whanau'>Whanau</label>
        </div>
        <div className='column is-4'>
          <input className='radio with-gap' onClick={props.handleDream} type="radio" name='public' checked={props.dreamScope === 'public'} id='public'/>
          <label for='public'>Public</label>
        </div>
      </form>
    </Fragment>
  )
}

const mapStateToProps = ({userDetails}) => ({user: userDetails})

export default connect(mapStateToProps, null)(NewDreamTitle)
