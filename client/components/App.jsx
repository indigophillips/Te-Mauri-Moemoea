import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Register from './auth/Register'
import Login from './auth/Login'
import Welcome from './Welcome'
import Navbar from './Navbar'
import DashboardMain from './DashboardMain'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user/:id' component={DashboardMain} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/navbar' component={Navbar} />
      </div>
    </Router>
  )
}

export default App
