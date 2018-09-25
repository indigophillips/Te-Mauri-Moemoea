import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell} from 'recharts'
import {getStats} from '../../actions/getStats'

class Balance extends React.Component {
  componentDidMount () {
    this.props.dispatch(getStats())
  }

  render () {
    return (
    
      <Fragment>
        {this.props.data &&
        <ResponsiveContainer className='rechartsbar' width='100%' height='100%'>
          <BarChart data={this.props.data} margin={{top: 0, right: 1, left: 1, bottom: 0}}>
            <XAxis dataKey="name" fontSize='.6em' stroke='white' fontFamily="sans-serif"/>
            <YAxis tickLine={false} stroke="#00000000" fontFamily="sans-serif"/>
            <Tooltip />
            <Bar dataKey="completed" stackId="a" >
              {this.props.data.map((taha) => (
                <Cell key={taha.name} fill={taha.color1} />
              ))}
            </Bar>
            <Bar dataKey="remaining" stackId="a" >
              {this.props.data.map((taha) => (
                <Cell key={taha.name} fill={taha.color2} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>}
      </Fragment>
    )
  }
}

const mapStateToProps = ({dreams}) => {
  const {selection} = dreams

  const ngaTaha = ['whānau', 'wairua', 'heningaro', 'tinana']
  const colour1 = ['darkred', 'orangered', 'darkblue', 'darkgreen']
  const colour2 = ['red', 'orange', 'blue', 'green']

  let data

  if (selection.id) {
    const selectedDream = dreams[selection.type].find(dream => dream.id == selection.id)
    
    data = ngaTaha.map((taha, i) => {
      let datum = {
        name: taha,
        color1: colour1[i],
        color2: colour2[i],
      }

      const allTasks = selectedDream.tasks.filter(task => (task.taha === taha))
      datum.completed = allTasks.filter(task => task.done).length
      datum.remaining = allTasks.length - datum.completed

      return datum
    })
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

export default connect(mapStateToProps)(Balance)
