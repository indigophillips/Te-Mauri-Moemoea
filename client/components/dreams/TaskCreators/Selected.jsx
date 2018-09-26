import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import AddTaskModal from './AddTaskModal'

export class Selected extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }

    this.toggleAddTask = this.toggleAddTask.bind(this)
  }

  toggleAddTask (open) {
    this.setState({
      open
    })
  }

  render () {
    return (
      <Fragment>
        <AddTaskModal
          open={this.state.open}
          close={() => this.toggleAddTask(false)}
          taha={this.props.taha}
        />

        <div className='level'>
          <h2 className='title'>{this.props.taha}:</h2>
        </div>

        <div className='level'>
          {this.props.newDream.tasks
            .filter(task => task.taha === this.props.taha)
            .map((task, i) => (
              <h6 className='subtitle' key={i}>{task.name}</h6>
            ))}
        </div>

        <button className='button' onClick={this.props.close}>Done</button>
        <button className='button' onClick={() => this.toggleAddTask(true)}>Add Task</button>
      </Fragment>
    )
  }
}

const mapStateToProps = ({newDream, userDetails}) => ({newDream, userDetails})

export default connect(mapStateToProps)(Selected)
