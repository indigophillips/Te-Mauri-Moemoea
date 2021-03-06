import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Welcome from './Welcome'
import Register from './auth/Register'
import Login from './auth/Login'
import Avatar from './Avatar'
import Onboarding from './Onboarding'
import DashboardMain from './dashboard/DashboardMain'
import NewDream from './dreams/NewDream'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user/:id/avatar' component={Avatar} />
        <Route path='/user/:id/onboarding' component={Onboarding} />
        <Route exact path='/user/:id' component={DashboardMain} />
        <Route path='/user/:id/newdream' component={NewDream} />
        <Route exact path='/' component={Welcome} />
      </Fragment>
    </Router>
  )
}

export default App
