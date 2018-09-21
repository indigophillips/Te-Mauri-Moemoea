import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Register from './auth/Register'
import Login from './auth/Login'
import Welcome from './Welcome'
import Avatar from './Avatar'
import Navbar from './Navbar'
import DashboardMain from './DashboardMain'
// import AddDream from '/AddDream'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user' component={Navbar} />
        <Route path='/user/:id' component={DashboardMain} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/avatar' component={Avatar} />
        {/* <Route path='/newdream' component={AddDream} /> */}
      </Fragment>
    </Router>
  )
}

export default App
