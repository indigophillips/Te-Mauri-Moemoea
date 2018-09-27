import React from 'react'
import {connect} from 'react-redux'

const Navbar = (props) => {
  return (
    <div className='columns is-mobile navbar'>
      <div className='column'>
        <img src='images/burger.png'/>
      </div>
      <div className='column switch'>
        <img src='images/world_logo.png'></img>
      </div>
      <div className='column'>
        <div className='avatar'>
          <img className='avatarImg' src={props.avatar} alt="broken brah"/>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    avatar: state.avatar
  }
}

export default connect(mapStateToProps, null)(Navbar)
