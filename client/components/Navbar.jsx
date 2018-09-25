import React from 'react'

const Navbar = () => {
  return (
    <div className='columns is-mobile navbar'>
      <div className='column'>
        <div className='log'>Log</div>
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
          <img className='avatarImg' src="./images/avatar4.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
