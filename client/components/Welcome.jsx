import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">       
        <div class='welcome'>
          <img class='welcome-image' src='images/logo_white.png'></img>
          <h2>Kua tatoko ki manuka</h2>
          <h3>Learn to dream again</h3>
          <Link to='/register' type='button' className='button cancel-button' >Accept WERO</Link>
          <img class='globe-image' src='images/world.png'></img>
        </div>
      </div>
    </section>
  )
}

export default Welcome
