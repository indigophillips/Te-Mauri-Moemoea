import React from 'react'
import {connect} from 'react-redux'

const Navbar = (props) => {
  return (
    <div className='columns is-mobile navbar'>
      <div className='column'>
        <img src='images/burger.png'/>
      </div>
      <div className='column switch'>
        <div className='toggle'>
          <label>
            <input type="checkbox"></input>
            <span className="lever"></span>
          </label>

        </div>
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
