import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NewDreamTitle from './NewDreamTitle'

import TaskCreation from './TaskCreation'
import Balance from '../dashboard/Balance'

import {sumOverDream} from '../../lib/sumTasks'

import {wipeNewDream} from '../../actions/newDream'

class NewDream extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dreamName: '',
      whanau: [],
      dreamScope: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWhanau = this.addWhanau.bind(this)
    this.handleDream = this.handleDream.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(wipeNewDream())
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
        whanau: [...this.state.whanau, `/images/avatar${num}.jpg`]
      })
    }
  }

  handleDream (e) {
    this.setState({
      personal: e.target.id
    })
  }

  render () {
    return (
      <Fragment>
        <NewDreamTitle whanau={this.state.whanau}
          handleChange={this.handleChange}
          addWhanau={this.addWhanau}
          personal={this.state.personal}
          handleDream={this.handleDream}/>
        <TaskCreation />
        <section className='section bargraph-section'>
          <Balance data={sumOverDream(this.props.dream)}/>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.userDetails,
    dream: state.newDream
  }
}

export default connect(mapStateToProps)(NewDream)
