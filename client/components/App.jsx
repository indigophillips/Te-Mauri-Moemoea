import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Register from './auth/Register'
import Welcome from './Welcome'
import Avatar from './Avatar'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/register' component={Register} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/avatar' component={Avatar}/>
        </div>
      </Router>
    )
  }
}

export default App
