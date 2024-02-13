import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 type="heading" className="sub-head">
          Speed is {count}mph
        </h1>
        <p className="para" type="paragraph">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="btn-con">
          <button className="accbtn" type="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="brkbtn" type="button" onClick={this.onDecrement}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
