import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/auth/login'
import {clearError} from '../../actions'
import {Redirect, Link} from 'react-router-dom'

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
    if (this.state.redirect) {
      return (
        <Redirect to={`/user/${this.state.id}`} />
      )
    }
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className='login'>
              {this.props.message && <span className='error'>
                {this.props.message}</span>}
              <form>
                <fieldset>
                  <img src="images/logo_white-01.png"></img>
                  <label htmlFor='phoneNumber'>PhoneNumber: </label>
                  <input type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    placeholder='Phone Number...'
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
                  <div className='buttonGroup'>
                    <button
                      type='button'
                      className='button'
                      onClick={this.handleSubmit}>Login
                    </button>
                    <Link to='/' type='button' className='button cancel-button' >Cancel</Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
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
