import React, {Fragment} from 'react'

import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell} from 'recharts'

const Balance = props => (
  <Fragment>
    {props.data &&
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={props.data} margin={{top: 0, right: 1, left: 1, bottom: 0}}>
        <XAxis dataKey="name" fontSize='.6em' stroke='white' fontFamily="sans-serif"/>
        <YAxis tickLine={false} stroke="#00000000" fontFamily="sans-serif"/>
        <Tooltip />
        <Bar dataKey="completed" stackId="a" >
          {props.data.map((taha) => (
            <Cell key={taha.name} fill={taha.color1} />
          ))}
        </Bar>
        <Bar dataKey="remaining" stackId="a" >
          {props.data.map((taha) => (
            <Cell key={taha.name} fill={taha.color2} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>}
  </Fragment>
)

export default Balance
