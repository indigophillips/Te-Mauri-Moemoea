import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Register from './auth/Register'
import Login from './auth/Login'
import Welcome from './Welcome'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/welcome' component={Welcome} />
      </div>
    </Router>
  )
}

export default App
