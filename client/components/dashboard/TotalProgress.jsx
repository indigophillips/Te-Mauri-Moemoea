import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

class TotalProgress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completedBalance: 30,
      currentBalance: 0,
      totalBalance: 100,
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
      20
      )
    })
  }

  render () {
    return (
      <div className='circularProgressbar'>
      <CircularProgressbar
      percentage={this.state.currentBalance * 100.0 / this.state.totalBalance}
      text={this.state.currentBalance * 100.0 / this.state.totalBalance + "%"}
      strokeWidth={3}
      backgroundPadding={6}
      styles={{ 
        
        path: {
        stroke: 'green',
        strokeWidth:'4px',
        strokeLinecap: 'butt',
        transition: 'stroke-dashoffset 0.18s ease 0s'
        },

        trail: {
        stroke: 'lightgreen',
        strokeWidth:'4px',
        circlesize: '20%',
        progress: '100%'
        },
        
        text: {
        displayTextWhenDone: true,
        donetext:'Success!',
        fill: 'green',
        fontSize: '10px',
        isundeterminated: true,        
        }
      }}
    />
    </div> 
    )
  }
}

export default TotalProgress
