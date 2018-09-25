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
      personal: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWhanau = this.addWhanau.bind(this)
    this.handleDream = this.handleDream.bind(this)
  }

  componentDidMount() {
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
    this.setState({
      whanau: [...this.state.whanau, `/images/avatar${num}.jpg`]
    })
  }

  handleDream (e) {
    this.setState({
      personal: e.target.id
    })
  }

  render () {
    return (
      <Fragment>
        <div>
          <NewDreamTitle whanau={this.state.whanau}
            handleChange={this.handleChange}
            addWhanau={this.addWhanau}
            personal={this.state.personal}
            handleDream={this.handleDream}/>
        </div>
        <TaskCreation />
        <div className='level is-mobile botBar'>
          <Balance className='balance' data={sumOverDream(this.props.dream)}/>
        </div>
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
