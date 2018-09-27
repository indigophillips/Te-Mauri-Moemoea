import React, {Component} from 'react'
import {connect} from 'react-redux'

import CloudView from './dashboard/CloudView'
import Balance from './dashboard/Balance'
import {sumOverDream} from '../lib/sumTasks'
import Modal from './Modals'

const minClicks = 5

class Onboarding extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dreamsClicked: 0,
      modelTriggered: false
    }
    this.clickDream = this.clickDream.bind(this)
  }

  clickDream () {
    this.setState({
      dreamsClicked: this.state.dreamsClicked + 1,
      modelTriggered: this.state.modelTriggered || this.state.dreamsClicked >= minClicks
    })
  }

  render () {
    return (
      <div className='dashCont'>
        <Modal open={this.state.modelTriggered} id={this.props.id} modalId={2}/>
        <CloudView customDreamClick={this.clickDream} dreams={this.props.dreams} dashboard={false}/>
        <Balance className='balance' data={this.props.data}/>
      </div>
    )
  }
}

const mapStateToProps = ({dreams, userDetails}) => {
  const {selection} = dreams

  const ngaTaha = ['whānau', 'wairua', 'hinengaro', 'tinana']
  const colour1 = ['darkred', 'orangered', 'darkblue', 'darkgreen']
  const colour2 = ['red', 'orange', 'blue', 'green']

  let data

  if (selection.id) {
    // eslint-disable-next-line
    const selectedDream = dreams[selection.type].find(dream => dream.id == selection.id)

    data = sumOverDream(selectedDream)
  } else {
    data = ngaTaha.map((taha, i) => ({
      name: taha,
      color1: colour1[i],
      color2: colour2[i],
      completed: 5,
      remaining: 2
    }))
  }
  return {
    data,
    dreams,
    user: userDetails
  }
}

export default connect(mapStateToProps, null)(Onboarding)
