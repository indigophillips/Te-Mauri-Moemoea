import React from 'react'
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell} from 'recharts'

const CustomXAxisLabel = props => {
  const taha = (props.payload.value === 'whānau')
    ? 'whanau'
    : props.payload.value
  const imageWidth = 90
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <image xlinkHref={`./images/taha/${taha}.png`} x={-imageWidth/2} y={0} height="40px" width={`${imageWidth}px`} textAnchor="left" fill="#666" />
    </g>
)}

const Balance = props => (
  <React.Fragment>
    {props.data &&
      <ResponsiveContainer width='100%' height={100}>
        <BarChart data={props.data} margin={{top: 0, right: 1, left: 1, bottom: 0}}>
          <XAxis height={50} tickLine={false} dataKey="name" interval={0} tick={<CustomXAxisLabel />} />
          <YAxis width={0} tickLine={false} stroke="#00000000" fontFamily="sans-serif"/>
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
      </ResponsiveContainer>
    }
  </React.Fragment>
)

export default Balance
