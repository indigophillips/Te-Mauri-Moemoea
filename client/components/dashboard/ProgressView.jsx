import React from 'react'
import {connect} from 'react-redux'
import TotalProgress from './TotalProgress'
import Balance from './Balance'
import {sumOverDream} from '../../lib/sumTasks'

function ProgressView (props) {
  return (
    <div className='level is-mobile botBar'>
      <TotalProgress className='totProgress'/>
      <Balance className='balance' data={props.data}/>
    </div>
  )
}

const mapStateToProps = ({dreams}) => {
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
    data
  }
}

export default connect(mapStateToProps)(ProgressView)
