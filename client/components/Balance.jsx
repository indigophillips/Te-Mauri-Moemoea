import React from 'react'
import {connect} from 'react-redux'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {getBalanceStats} from '../actions/getBalanceStats'

class Balance extends React.Component {
  componentDidMount () {
    this.props.dispatch(getBalanceStats())
  }

  render () {
    return (
      <div className='stats'>
        {this.props.tahaData &&
        <ResponsiveContainer width='100%' height={500} maxWidth={600}>
          <BarChart width={600} height={300} data={this.props.tahaData} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="completed" stackId="a" fill="#8884d8" />
            <Bar dataKey="remaining" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>}
      </div>
    )
  }
}

const mapStateToProps = ({balanceStats}) => ({tahaData: balanceStats})

export default connect(mapStateToProps)(Balance)
