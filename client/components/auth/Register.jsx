import React, {Component} from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions'
import {Redirect, Link} from 'react-router-dom'
import {register} from '../../actions/auth/register'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alias: '',
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      iwi: '',
      phoneNumber: '',
      confirm: '',
      password: '',
      match: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      match: match
    })
  }

  handleSubmit (e) {
    const {register} = this.props
    const user = {
      alias: this.state.alias,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      age: this.state.age,
      iwi: this.state.iwi,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    }
    register(user)
    e.preventDefault()
  }
  render () {
    if (this.props.message === 'Registration successful') {
      return (
        <Redirect to='/login' />
      )
    }
    return (
      <div className= 'register'>
        <form>
          <fieldset>
            <h2>Register</h2>
            <label htmlFor='alias'></label>
            <input
              type='text'
              name='alias'
              id='alias'
              placeholder='Alias'
              onChange={this.handleChange}
              value={this.state.Alias}
            />
            <br />
            <label htmlFor='firstName'></label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <br />
            <label htmlFor='lastName'></label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <br />
            <label htmlFor='gender'></label>
            <input
              type='text'
              name='gender'
              id='gender'
              placeholder='Gender'
              onChange={this.handleChange}
              value={this.state.Gender}
            />
            <br />
            <label htmlFor='age'></label>
            <input
              type='text'
              name='age'
              id='age'
              placeholder='Age'
              onChange={this.handleChange}
              value={this.state.Age}
            />
            <br />
            <label htmlFor='Alias'></label>
            <input
              type='text'
              name='iwi'
              id='iwi'
              placeholder='Iwi'
              onChange={this.handleChange}
              value={this.state.Iwi}
            />
            <br />
            <label htmlFor='phoneNumber'></label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Phone Number'
              onChange={this.handleChange}
              value={this.state.phoneNumber}
            />
            <br />
            <label htmlFor='password'></label>
            <input type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={this.handleChange}
              value={this.state.password} />
            <br />
            <label htmlFor='confirmPassword'></label>
            <input
              type='password'
              name='confirm'
              id='confirm'
              placeholder='Confirm password'
              onChange={this.handleChange}
              value={this.state.change}
            />
            <br />
            <button
              type='button'
              disabled={!this.state.match}
              className='button'
              onClick={this.handleSubmit}>Register</button>
            <Link to='/avatar' type='button' className='button' >Cancel </Link>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (user) => {
      dispatch(clearError())
      return dispatch(register(user))
    }
  }
}

function mapStateToProps (state) {
  return {
    message: state.errorMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
