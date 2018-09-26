import React from 'react'
import {connect} from 'react-redux'
import Modal from '../Modals'
import {login} from '../../actions/auth/login'
import {clearError} from '../../actions'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneNumber: '',
      password: '',
      redirect: false,
      id: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const user = {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    }
    const goUser = (id) => {
      this.setState({
        redirect: true,
        id: id
      })
    }
    this.props.login(user, goUser)
    e.preventDefault()
  }

  render () {
    return (
      <div className='login'>
        <Modal open={this.state.redirect} id={this.state.id} modalId={1}/>
        {this.props.message && <span className='error'>
          {this.props.message}</span>}
        <form>
          <fieldset>
            <h2>Login</h2>
            <label htmlFor='phoneNumber'>PhoneNumber: </label>
            <input type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Phone number...'
              onChange={this.handleChange}
              value={this.state.phoneNumber} />
            <br />
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              placeholder='Password...'
              onChange={this.handleChange}
              value={this.state.password} />
            <br />
            <button
              type='button'
              className='button'
              onClick={this.handleSubmit}>Login
            </button>
            <Link to='/' type='button' className='button cancel-button' >Cancel</Link>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (user, goStore) => {
      dispatch(clearError())
      return dispatch(login(user, goStore))
    }
  }
}

function mapStateToProps (state) {
  return {
    message: state.errorMessage,
    user: state.userDetails
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
