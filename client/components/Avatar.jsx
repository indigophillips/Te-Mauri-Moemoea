import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from './Modals'
import {addAvatar} from '../actions/selectAvatar'

class Avatar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedAvatar: '',
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick (e) {
    this.setState({selectedAvatar: e.target.name})
  }

  handleSubmit (e) {
    this.setState({redirect: true})
    this.props.selectAvatar(
      e.target.name || 'images/avatar1.png')
    e.preventDefault()
  }

  render () {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className='avatar'>
              <Modal open={this.state.redirect} id={this.props.user.id} modalId={1}/>
              <h4> Choose your Kaitiaki...</h4>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img onClick={this.handleSubmit} 
                    className='avatar-image' src="images/avatar1.png"
                    name='images/avatar1.png'></img>
                    <div className='avatar-caption'>Whai Repo</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img onClick={this.handleSubmit} 
                    className='avatar-image' src="images/avatar2.png"
                    name='images/avatar2.png'></img>
                    <div className='avatar-caption'>Mangopare</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img onClick={this.handleSubmit} 
                    className='avatar-image' src="images/avatar3.png"
                    name='images/avatar3.png'></img>
                    <div className='avatar-caption'>Tuatara</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img onClick={this.handleSubmit} 
                    className='avatar-image' src="images/avatar4.png"                    
                    name='images/avatar4.png'></img>
                    <div className='avatar-caption'>Kāhu</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img onClick={this.handleSubmit} 
                    className='avatar-image' src="images/avatar5.png"
                    name='images/avatar5.png'></img>
                    <div className='avatar-caption'>Tohora</div>
                  </div>
                </div>
                <div className='column is-half'>
                  <div className='avatar-item'>
                    <img onClick={this.handleSubmit} 
                    className='avatar-image' src="images/avatar6.png"
                    name='images/avatar6.png'></img>
                    <div className='avatar-caption'>Taniwha</div>
                  </div>
                </div>
              </div>
                {/* <button type='button' 
                  className='button' 
                  onClick={this.handleSubmit}
                >Confirm</button> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.userDetails
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectAvatar: avatar => dispatch(addAvatar(avatar))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)
