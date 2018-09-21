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
        <div className='avatar'></div>
      </div>
    </div>
  )
}

export default Navbar
