import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import NewDreamTitle from './NewDreamTitle'
import TaskCreation from './TaskCreation'
import Balance from '../dashboard/Balance'
import {sumOverDream} from '../../lib/sumTasks'
import {wipeNewDream, addNewDream} from '../../actions/newDream'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dreamName: '',
      whanau: [],
      dreamScope: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWhanau = this.addWhanau.bind(this)
    this.handleDream = this.handleDream.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  addWhanau () {
    let num = Math.floor(Math.random() * 3)
    if (num < 1) { num = 1 }
    if (this.state.whanau.length < 7) {
      this.setState({
        whanau: [...this.state.whanau, `/images/avatar${num}.png`]
      })
    }
  }

  handleDream (e) {
    this.setState({
      dreamScope: e.target.name
    })
  }

  handleRedirect (boo) {
    this.setState({
      redirect: boo
    })
  }

  handleSubmit () {
    this.handleRedirect(true)
    const scopes = Object.keys(this.props.dreams).filter(entry => entry != 'selection')
    this.props.submitDream({
      id: scopes.reduce((total, dreamArr) => total + this.props.dreams[dreamArr].length, 0),
      name: this.state.dreamName,
      scope: this.state.dreamScope,
      tasks: this.props.dream.tasks
    })
    this.props.wipeNewDream()
  }


  render () {
    if (this.state.redirect) {
      let id = this.props.user.id
      this.handleRedirect(false)
      return <Redirect to={`/user/${id}`} />
    } else {
      return (
        <section className="hero is-fullheight">
          <div className='hero-head'>
          </div>
          <div className="hero-body">
            <div className="container">
              <section class='section'>
                <NewDreamTitle whanau={this.state.whanau}
                  handleChange={this.handleChange}
                  addWhanau={this.addWhanau}
                  dreamScope={this.state.dreamScope}
                  handleDream={this.handleDream}/>
              </section>
              <section class='section'>
                <TaskCreation />
              </section>
            </div>
            <button type='button' onClick={this.handleSubmit}>Submit Dream</button>
          </div>
          <div className='hero-footer'>
            <section className='section bargraph-section'>
              <Balance data={sumOverDream(this.props.dream)}/>
            </section>
          </div>
        </section>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    user: state.userDetails,
    dreams: state.dreams,
    dream: state.newDream
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submitDream: dreamName => dispatch(addNewDream(dreamName)),
    wipeNewDream: () => dispatch(wipeNewDream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDream)
