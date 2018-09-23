import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Register from './auth/Register'
import Login from './auth/Login'
import Welcome from './Welcome'
import Avatar from './Avatar'
import Navbar from './Navbar'
import Balance from './Balance'
import DashboardMain from './dashboard/DashboardMain'
import InvitesAndNewDreams from './dashboard/InvitesAndNewDreams'
import NewDream from './dreams/NewDream'
import TotalProgress from './dashboard/TotalProgress'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user' component={Navbar} />
        <Route exact path='/user/:id' component={DashboardMain} />
        <Route path='/user/:id/dreams' component={InvitesAndNewDreams} />
        <Route path='/user/:id/NewDream' component={NewDream} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/avatar' component={Avatar} />
        <Route path='/balance' component={Balance} />
      </Fragment>
    </Router>
  )
}

export default App
