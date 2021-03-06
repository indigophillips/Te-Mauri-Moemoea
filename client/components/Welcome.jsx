import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">       
        <div class='welcome'>
          <img class='welcome-image' src='images/logo_white.png'></img>
          <h2>Kua takoto te manuka</h2>
          <h2>Learn to dream again</h2>
          <Link to='/login' type='button' className='button cancel-button' >Accept Wero</Link>
          <img class='globe-image' src='images/hori_world-01.png'></img>
        </div>
      </div>
    </section>
  )
}

export default Welcome
