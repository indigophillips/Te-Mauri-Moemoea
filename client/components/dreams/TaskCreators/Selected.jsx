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
        <div className='columns is-mobile'>
          <div className='column is-10 columns is-mobile is-multiline'>
            {this.props.newDream.tasks
              .filter(task => task.taha === this.props.taha)
              .map((task, i) => (
                <div class='column is-narrow'>
                  <span key={i} class="tag">
                    {task.name}
                    <button class="delete is-small"></button>
                  </span>
                </div>
              ))}
          </div>
          <button className='button column' onClick={() => this.toggleAddTask(true)}>Add Task</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({newDream, userDetails}) => ({newDream, userDetails})

export default connect(mapStateToProps)(Selected)
