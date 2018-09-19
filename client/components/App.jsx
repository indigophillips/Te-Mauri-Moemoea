import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  render () {
    return (
      <div className='app'>
        Hi
      </div>
    )
  }
}

export default App
