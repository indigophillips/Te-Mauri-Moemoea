import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

class TotalProgress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completedBalance: 20,
      currentBalance: 0,
      totalBalance: 100,
      counter: null
    }
    this.updateBalance = this.updateBalance.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.randomNum !== this.state.completedBalance){
      this.setState({
        currentBalance: 0,
        completedBalance: prevProps.randomNum
      }, this.updateBalance)
    }
  }

  updateBalance() {
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

  componentDidMount () {
    this.updateBalance()
  }

  render () {
    return (
      <CircularProgressbar
      percentage={this.state.currentBalance * 100.0 / this.state.totalBalance}
      text={this.state.currentBalance * 100.0 / this.state.totalBalance + "%"}
      strokeWidth={3}
      backgroundPadding={6}
      styles={{ 
        
        path: {
        stroke: '#4c044c',
        strokeWidth:'4px',
        strokeLinecap: 'butt',
        transition: 'stroke-dashoffset 0.18s ease 0s'
        },

        trail: {
        stroke: '#8c198c',
        strokeWidth:'4px',
        circlesize: '20%',
        progress: '100%'
        },
        
        text: {
        displayTextWhenDone: true,
        donetext:'Success!',
        fill: '#4c044c',
        fontSize: '10px',
        isundeterminated: true,        
        }
      }}
    />
    )
  }
}

export default TotalProgress
