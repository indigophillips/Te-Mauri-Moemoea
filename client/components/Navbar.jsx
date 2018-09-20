import React from 'react'

const Navbar = () => {
  return (
    <div className='columns is-mobile navbar'>
      <div className='column'>
        <div className='log'></div>
      </div>
      <div className='column'>
        <div className='toggle'></div>
      </div>
      <div className='column'>
        <div className='avatar'></div>
      </div>
    </div>
  )
}

export default Navbar
