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
        {this.props.tahaData &&
        <ResponsiveContainer width='100%' height={200} maxWidth={150} >
          <BarChart data={this.props.tahaData} margin={{top: 0, right: 1, left: 1, bottom: 0}}>
            <XAxis tickLine={false} stroke="white" fontFamily="sans-serif"/>
            <YAxis tickLine={false} stroke="white" fontFamily="sans-serif"/>
            <Tooltip />
            <Bar dataKey="completed" stackId="a" >
              {this.props.tahaData.map((taha) => (
                <Cell key={taha.name} fill={taha.color1} />
              ))}
            </Bar>
            <Bar dataKey="remaining" stackId="a" >
              {this.props.tahaData.map((taha) => (
                <Cell key={taha.name} fill={taha.color2} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>}
      </Fragment>
    )
  }
}

const mapStateToProps = ({stats}) => ({tahaData: stats})

export default connect(mapStateToProps)(Balance)
