import React from 'react'
import {connect} from 'react-redux'

import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'
import {getBalanceStats} from '../actions/getBalanceStats'

class Balance extends React.Component {
  componentDidMount () {
    this.props.dispatch(getBalanceStats())
  }

  render () {
    return (
      <div className='stats'>
        {this.props.tahaData &&
        <ResponsiveContainer width='50%' height={200} maxWidth={150}>
          <BarChart data={this.props.tahaData} margin={{top: 0, right: 1, left: 1, bottom: 0}}>
            <XAxis tickLine={false} stroke="white" fontFamily="sans-serif"/>
            <YAxis tickLine={false} stroke="white" fontFamily="sans-serif"/>
            <Tooltip/>
            <Bar dataKey="completed" stackId="a" fill="#009901" />
            <Bar dataKey="remaining" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>}
      </div>
    )
  }
}

const mapStateToProps = ({balanceStats}) => ({tahaData: balanceStats})

export default connect(mapStateToProps)(Balance)
