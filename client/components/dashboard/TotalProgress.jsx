import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export class TotalProgress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completedBalance: 3,
      currentBalance: 0,
      totalBalance: 10,
      counter: null
    }
  }

  componentDidMount () {
    this.setState({
      counter: setInterval(() => {
        if (this.state.currentBalance < this.state.completedBalance) {
          const nextBalance = this.state.currentBalance + 1
          this.setState({currentBalance: nextBalance})
        } else {
          clearInterval(this.state.counter)
        }
      },
      100
      )
    })
  }

  render () {
    return (
      <CircularProgressbar
        percentage={this.state.currentBalance * 100.0 / this.state.totalBalance}
        // Path width must be customized with strokeWidth,
        // since it informs dimension calculations.
        strokeWidth={5}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the part that's "complete"
          path: {
            // Tweak path color:
            stroke: '#f88',
            // Tweak path to use flat or rounded ends:
            strokeLinecap: 'butt',
            // Tweak transition animation:
            transition: 'stroke-dashoffset 0.5s ease 0s'
          },
          // Customize the circle behind the path
          trail: {
            // Tweak the trail color:
            stroke: '#d6d6d6'
          },
          // Customize the text
          text: {
            // Tweak text color:
            fill: '#f88',
            // Tweak text size:
            fontSize: '30px'
          }
        }}
      />
    )
  }
}
export default TotalProgress
