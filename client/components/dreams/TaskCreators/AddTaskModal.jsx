import React, {Component} from 'react'

import {connect} from 'react-redux'

import {addTaskToDream} from '../../../actions/newDream'

export class AddTaskModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.submitTask({
      name: this.state.name,
      description: this.state.description,
      taha: this.props.taha,
      done: false
    })
    this.props.close()
  }

  render() {
    return (
      <div className={`modal ${this.props.open && 'is-active'}`}>
        <div className="modal-background"></div>

        <div className="modal-content">
          <form>
            <fieldset>
              <h2 className='title is-2'>New Task</h2>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                placeholder='What are you going to do....?'
                onChange={this.handleChange}
                value={this.state.name}
              />
              <br/>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                name='description'
                placeholder='How and why?'
                onChange={this.handleChange}
                value={this.state.description}
              />
              <button
                type='button'
                className='button'
                onClick={this.handleSubmit}>
                Add
              </button>
            </fieldset>
          </form>
        </div>

        <button className="modal-close is-large" aria-label="close" onClick={this.props.close}></button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  submitTask: task => dispatch(addTaskToDream(task))
})

export default connect(null, mapDispatchToProps)(AddTaskModal)