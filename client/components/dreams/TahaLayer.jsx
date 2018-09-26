import React, {Component} from 'react'

import ExpandedTaskCreator from './TaskCreators/Selected'
import MinimisedCreator from './TaskCreators/Minified'

export class TahaLayer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle (open) {
    this.setState({
      open
    })
  }

  render () {
    return (
      <div className='level is-mobile' >
        {(this.state.open)
          ? <ExpandedTaskCreator
            taha={this.props.taha}
            close={() => this.toggle(false)}
          />
          : <MinimisedCreator
            taha={this.props.taha}
            open={() => this.toggle(true)}
          />}
      </div>
    )
  }
}

export default TahaLayer
