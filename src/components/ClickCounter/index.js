/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">
          The Button has been clicked
          <span className="digit-color"> {count} </span>
          times
        </h1>
        <p className="main-paragraph">
          Click the button to increase the count!
        </p>
        <div>
          <button onClick={this.onIncrement} className="main-button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
